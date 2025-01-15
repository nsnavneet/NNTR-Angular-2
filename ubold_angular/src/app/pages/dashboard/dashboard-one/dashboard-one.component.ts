import { Component, OnInit, Injectable } from '@angular/core';
import { NgbCalendar, NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ChartStatistics } from 'src/app/shared/widget/chart-statistics/chart-statistics.model';
import { StatisticsCard1 } from 'src/app/shared/widget/statistics-card/statistics-card.model';
import { ChartOptions } from '../../charts/apex/apex-chart.model';
import { RevenueHistory, UserBalance } from './dashboard-one.model';
import { REVENUEHISTORYDATA, USERBALANCEDATA } from './data';

/**
 * This Service handles how the date is rendered and parsed from keyboard i.e. in the bound input field.
 */
@Injectable()
export class CustomDateParserFormatter extends NgbDateParserFormatter {

  readonly month_list = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  readonly DELIMITER = " ";


  parse(value: string): NgbDateStruct | null {
    if (value) {
      const date = value.split(this.DELIMITER);
      return {
        day: parseInt(date[1], 10),
        month: this.month_list.indexOf(date[0]),
        year: parseInt(date[2], 10)
      };
    }
    return null;
  }

  format(date: NgbDateStruct | null): string {
    return date ? this.month_list[date.month - 1] + this.DELIMITER + date.day + ',' + this.DELIMITER + date.year : '';
  }
}

@Component({
  selector: 'app-dashboard-one',
  templateUrl: './dashboard-one.component.html',
  styleUrls: ['./dashboard-one.component.scss'],
  providers: [
    { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter }
  ]
})

export class DashboardOneComponent implements OnInit {

  statisticsCardData: StatisticsCard1[] = [];
  chartStatisticsData: ChartStatistics[] = [];
  revenuChart!: Partial<ChartOptions>;
  salesAnalyticsChart!: Partial<ChartOptions>;
  userBalanceData: UserBalance[] = [];
  revenueHistoryData: RevenueHistory[] = [];
  sortedRevenueHistoryData: RevenueHistory[] = [];
  filteredRevenueHistoryData: RevenueHistory[] = [];

  date!: NgbDateStruct;

  sortColumn: string = 'admitDate';
  sortDirection: 'asc' | 'desc' = 'desc';
  searchTerm: string = '';

  selectedDateRange: string = '';
  showCustomDatePicker: boolean = false;
  customStartDate: string = '';
  customEndDate: string = '';
  selectedOption: string = '';

  isMarketplacesSorted: boolean = false;
  isMarketplacesAscending: boolean = true;

  showDateFilter: boolean = false;

  timeRange: 'today' | 'weekly' | 'monthly' = 'monthly';

  salesAnalyticsData = {
    today: [
      { name: 'Admitted Patients', data: [10] },
      { name: 'Surgeries Done', data: [2] },
      { name: 'Biopsies Done', data: [3] },
      { name: 'Discharges/ Deaths', data: [1] }
    ],
    weekly: [
      { name: 'Admitted Patients', data: [50, 65, 45, 70, 55, 75, 60] },
      { name: 'Surgeries Done', data: [10, 15, 8, 12, 9, 14, 11] },
      { name: 'Biopsies Done', data: [12, 10, 14, 8, 13, 11, 15] },
      { name: 'Discharges/ Deaths', data: [8, 12, 7, 15, 9, 13, 10] }
    ],
    monthly: [
      { name: 'Admitted Patients', data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160] },
      { name: 'Surgeries Done', data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16] },
      { name: 'Biopsies Done', data: [25, 40, 30, 20, 45, 25, 10, 35, 20, 20, 15, 10] },
      { name: 'Discharges/ Deaths', data: [23, 41, 35, 25, 44, 20, 16, 30, 20, 24, 15, 19] }
    ]
  };

  filteredPatientsData: any[] = [];
  patientsData: any[] = [];

  constructor(private calendar: NgbCalendar) { }

  ngOnInit(): void {
    this.date = this.calendar.getToday();
    this._fetchStatisticsData();
    this.initChart();
    this._fetchUserBalanceData();
    this._fetchRevenueHistoryData();
    this.sortedRevenueHistoryData = [...this.revenueHistoryData];
    this.filteredRevenueHistoryData = [...this.revenueHistoryData];

    // Sample data for patients
    this.patientsData = [
      { name: 'John Doe', dob: new Date('1980-05-15'), admitDate: new Date('2023-05-15'), surgeryDone: true, status: 'Discharged' },
      { name: 'Jane Smith', dob: new Date('1992-08-22'), admitDate: new Date('2023-05-14'), surgeryDone: false, status: 'Transferred' },
      { name: 'Alice Johnson', dob: new Date('1975-11-30'), admitDate: new Date('2023-05-16'), surgeryDone: true, status: 'Death' },
      // ... more sample data ...
    ];

    this.filteredPatientsData = [...this.patientsData];
    this.sortData('admitDate');
  }

  /**
   * fetch statistics data
   */
  _fetchStatisticsData(): void {

    this.statisticsCardData = [
      {
        id: 1,
        variant: 'primary',
        description: "Admitted Patients",
        icon: 'mdi mdi-bed-outline', // Changed to represent hospital bed
        stats: 500,
        options: {
          duration: 2
        }
      },
      {
        id: 2,
        variant: 'success',
        description: "Total Patients",
        icon: 'mdi mdi-account-group', // Changed to represent group of people
        stats: 1270,
        options: {
          duration: 2
        }
      },
      {
        id: 3,
        variant: 'danger', // Kept 'danger' to represent the seriousness of oncology
        description: "Onco Patients",
        icon: 'activity', // Changed to 'activity' which can represent a heartbeat or medical chart
        stats: 51,
        options: {
          duration: 2
        }
      },
      {
        id: 4,
        variant: 'warning',
        description: "Non Onco Patients",
        icon: 'mdi mdi-hospital-box-outline', // Changed to represent general hospital
        stats: 78.41,
        options: {
          duration: 2,
        }
      }

    ]
  }

  /**
   * initialize charts
   */
  initChart(): void {
    this._fetchChartStatistics();
    this.revenuChart = {
      series: [68],
      chart: {
        height: 242,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '65%',
          }
        },
      },
      colors: ['#f86262'],
      labels: ['Total Patients'],

    };

    this.updateSalesAnalyticsChart();
  }

  /**
   * fetches chart statistics
   */
  _fetchChartStatistics(): void {
    this.chartStatisticsData = [{
      title: 'Surgeries Done',
      stats: '7',
      icon: 'mdi mdi-surgery',  // Changed to represent surgery
      variant: 'danger'
    },
    {
      title: 'Biopsies',
      stats: '8',
      icon: 'mdi mdi-microscope',  // Changed to represent laboratory work
      variant: 'success'
    },
    {
      title: 'Discharges/ Deaths',
      stats: '5',
      icon: 'mdi mdi-exit-run',  // Changed to represent exit/discharge
      variant: 'danger'
    }
    ];
  }

  /**
   * fetch users balance data
   */
  _fetchUserBalanceData(): void {
    this.userBalanceData = USERBALANCEDATA;
  }

  _fetchRevenueHistoryData(): void {
    this.revenueHistoryData = REVENUEHISTORYDATA;
  }

  sortMarketplaces(): void {
    this.isMarketplacesSorted = true;
    this.isMarketplacesAscending = !this.isMarketplacesAscending;

    this.sortedRevenueHistoryData.sort((a, b) => {
      const marketplaceA = a.marketplaces.toLowerCase();
      const marketplaceB = b.marketplaces.toLowerCase();

      if (marketplaceA < marketplaceB) {
        return this.isMarketplacesAscending ? -1 : 1;
      }
      if (marketplaceA > marketplaceB) {
        return this.isMarketplacesAscending ? 1 : -1;
      }
      return 0;
    });
  }

  sortData(column: string): void {
    if (column === this.sortColumn) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }

    this.filteredPatientsData.sort((a, b) => {
      let valueA = a[column];
      let valueB = b[column];

      // Special handling for date fields
      if (column === 'dob' || column === 'admitDate') {
        valueA = new Date(valueA).getTime();
        valueB = new Date(valueB).getTime();
      }

      if (valueA < valueB) {
        return this.sortDirection === 'asc' ? -1 : 1;
      }
      if (valueA > valueB) {
        return this.sortDirection === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }

  getStatusWeight(status: string): number {
    switch (status) {
      case 'Paid':
        return 3;
      case 'Upcoming':
        return 2;
      case 'Overdue':
        return 1;
      default:
        return 0;
    }
  }

  getSortIcon(column: string): string {
    if (column === this.sortColumn) {
      return this.sortDirection === 'asc' ? 'fa-sort-up' : 'fa-sort-down';
    }
    return 'fa-sort';
  }

  onSearch(event: Event): void {
    const searchTerm = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredPatientsData = this.patientsData.filter(patient =>
      patient.name.toLowerCase().includes(searchTerm) ||
      patient.dob.toLocaleDateString().includes(searchTerm) ||
      patient.admitDate.toLocaleDateString().includes(searchTerm) ||
      patient.status.toLowerCase().includes(searchTerm) ||
      (patient.surgeryDone ? 'yes' : 'no').includes(searchTerm)
    );
  }

  filterData(): void {
    if (!this.searchTerm) {
      this.filteredRevenueHistoryData = [...this.sortedRevenueHistoryData];
    } else {
      this.filteredRevenueHistoryData = this.sortedRevenueHistoryData.filter(item =>
        item.marketplaces.toLowerCase().includes(this.searchTerm) ||
        item.date.toString().toLowerCase().includes(this.searchTerm) ||
        item.payouts.toString().includes(this.searchTerm) ||
        item.status.toLowerCase().includes(this.searchTerm)
      );
    }
  }

  filterByDate(option: string): void {
    const today = new Date();
    let startDate: Date;
    let endDate: Date = today;

    this.selectedOption = option;

    if (option === 'custom') {
      this.customStartDate = '';
      this.customEndDate = '';
      return;
    }

    switch (option) {
      case 'last7days':
        startDate = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
        break;
      case 'thisMonth':
        startDate = new Date(today.getFullYear(), today.getMonth(), 1);
        break;
      case 'lastMonth':
        startDate = new Date(today.getFullYear(), today.getMonth() - 1, 1);
        endDate = new Date(today.getFullYear(), today.getMonth(), 0);
        break;
      case 'last2Months':
        startDate = new Date(today.getFullYear(), today.getMonth() - 2, 1);
        break;
      default:
        return;
    }

    this.customStartDate = this.formatDate(startDate);
    this.customEndDate = this.formatDate(endDate);
  }

  applyDateFilter(): void {
    if (this.customStartDate && this.customEndDate) {
      const startDate = new Date(this.customStartDate);
      const endDate = new Date(this.customEndDate);
      this.filterReportsByDateRange(startDate, endDate);
      if (this.selectedOption !== 'custom') {
        this.selectedOption = 'custom';
      }
    }
  }

  filterReportsByDateRange(startDate: Date, endDate: Date): void {
    console.log('Filtering reports from', startDate, 'to', endDate);
    this.filteredRevenueHistoryData = this.revenueHistoryData.filter(item => {
      const itemDate = new Date(item.date);
      return itemDate >= startDate && itemDate <= endDate;
    });
    this.updateReportsChart();
  }
  applyCustomDateFilter(): void {
    console.log('Custom date filter applied');
    // Implement your filter logic here
  }

  updateReportsChart(): void {
    // Update your chart data here based on the filtered data
    // For example:
    // this.revenuChart.series = [this.calculateTotalRevenue(this.filteredRevenueHistoryData)];
  }

  formatDate(date: Date): string {
    return date.toISOString().split('T')[0]; // Returns date in YYYY-MM-DD format
  }

  toggleDateFilter(): void {
    this.showDateFilter = !this.showDateFilter;
  }

  updateSalesAnalyticsChart(): void {
    const data = this.salesAnalyticsData[this.timeRange];
    const labels = this.getLabels();
  
    this.salesAnalyticsChart = {
      series: data,
      chart: {
        height: 378,
        type: 'line',
        offsetY: 10,
        toolbar: {
          show: false,
        }
      },
      // The `stroke` property is still part of the configuration but not bound in the template
      stroke: {
        width: [2, 2, 2, 2],
        curve: 'smooth'
      },
      colors: ['#1abc9c', '#4a81d4', '#f672a7', '#f7b84b'],
      dataLabels: {
        enabled: true,
        enabledOnSeries: [0, 1, 2, 3]
      },
      xaxis: {
        type: 'category',
        categories: labels,
        labels: {
          formatter: function(value) {
            return value;
          }
        }
      },
      legend: {
        offsetY: 7,
      },
      grid: {
        padding: {
          bottom: 20,
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: 'horizontal',
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 0.75,
          opacityTo: 0.75,
          stops: [0, 0, 0],
        },
      },
      yaxis: [
        {
          title: {
            text: 'Number of Patients',
          },
        }
      ],
    };
  }

  getLabels(): string[] {
    const today = new Date();
    switch (this.timeRange) {
      case 'today':
        return ['Today'];
      case 'weekly':
        return Array.from({length: 7}, (_, i) => {
          const date = new Date(today);
          date.setDate(today.getDate() - 6 + i);
          return date.toLocaleDateString('en-US', { weekday: 'short' });
        });
      case 'monthly':
        return [
          'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ];
    }
  }

  changeTimeRange(range: 'today' | 'weekly' | 'monthly'): void {
    this.timeRange = range;
    this.updateSalesAnalyticsChart();
  }
}
