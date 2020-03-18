class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }
  startClick(callback) {
    this.intervalId = setInterval(() => this.currentTime++, 1000)
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }
  getSeconds() {
    return this.currentTime % 60
  }

  twoDigitsNumber(value) {
    // ... your code goes here
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }
  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
    // ... your code goes here
  }
  splitClick() {
    // ... your code goes here
  }
}
