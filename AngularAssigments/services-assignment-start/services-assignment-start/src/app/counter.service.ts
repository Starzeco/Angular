export class CounterService {
  inactiveToActive = 0;
  activeToInactive = 0;

  incrementInactiveToActive() {
    this.inactiveToActive++;
    alert('Status of changes from inactive To Active: '+this.inactiveToActive);
  }
  incrementActiveToInactive() {
    this.activeToInactive++;
    alert('Status of changes from Active To inactive: '+this.activeToInactive);
  }
}
