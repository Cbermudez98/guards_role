import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  set(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  get<T>(key: string): T | null {
    const element = localStorage.getItem(key);
    console.log('🚀  ~ StorageService ~ element:', element);
    return element && this.isValidJson(element)
      ? (JSON.parse(element) as T)
      : (element as T);
  }

  clear() {
    localStorage.clear();
  }

  private isValidJson(data: any): boolean {
    try {
      JSON.parse(data);
      return true;
    } catch (error) {
      return false;
    }
  }
}
