import { action, computed, makeObservable, observable } from "mobx";

class UserStore {
  users = [];
  constructor() {
    makeObservable(this, {
      users: observable,
      addUsers: action,
      total: computed,
    });
  }
  addUsers = (name) => {
    const newUser = {
      id: +Math.random().toFixed(4),
      name,
    };
    this.users.push(newUser);
  };
  get total() {
    return this.users.length;
  }
}

export const userStore = new UserStore();
