class Observable {
  ...
  notify() {
    for observer in this.observers {
      observer.notifyAboutNewState();
    }
  }
  ...
}