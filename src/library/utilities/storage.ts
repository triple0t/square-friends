import { AppStateInterface } from "@library/common/types/AppState";

class StorageService {
  public appName: string;
  private allItems!: AppStateInterface;

  constructor(appName?: string) {
    this.appName = appName ?? "square-friends";
    this.getFromStorage();
  }

  private getFromStorage = () => {
    const data = localStorage.getItem(this.appName);
    if (data && typeof data === "string") {
      this.allItems = JSON.parse(data);
    }
  };

  private saveInStorage = (currentState: AppStateInterface) => {
    if (currentState) {
      const stringState = JSON.stringify(currentState);
      localStorage.setItem(this.appName, stringState);
    }
  };

  public getState = () => this.allItems;

  public setState = (stateItem: AppStateInterface) => {
    this.saveInStorage(stateItem);
  };
}

export const storageInstace = new StorageService();
