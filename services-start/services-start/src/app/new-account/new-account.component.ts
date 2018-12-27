import { Component } from '@angular/core';
import {LoggingService} from '../logging.service';
import {AccountsService} from '../accounts.service';


@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService],    // To trzeba dodać, zeby zapewnic, zeby angular wiedzial jaki typ ma wstrzyknac
})
export class NewAccountComponent {



  constructor(/*private loggingService: LoggingService, */private accountsService: AccountsService) {
    this.accountsService.statusUpdate.subscribe(
      (status: string) => alert('New Status: ' + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
   // this.loggingService.logStatusChange(accountStatus);

  }
}
