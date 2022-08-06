import { Injectable, Inject } from '@angular/core';
import { NotificationsService } from './notifications.service';
import {
  BUST_ENVIRONMENT,
  BustEnvironment,
} from '@fantasy-football-busts/environment';
import { Bust } from '@fantasy-football-busts/api-interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BustsService {
  model = 'busts';

  constructor(
    private httpClient: HttpClient,
    @Inject(BUST_ENVIRONMENT) private environment: BustEnvironment,
    private notificationsService: NotificationsService
  ) {}

  all() {
    return this.httpClient.get<Bust[]>(this.getUrl());
  }

  find(bustId: string) {
    return this.httpClient.get<Bust>(this.getUrlById(bustId));
  }

  create(busts: Bust) {
    this.notificationsService.notify('Created Bust HTTP Call');
    return this.httpClient.post<Bust>(this.getUrl(), busts);
  }

  update(busts: Bust) {
    this.notificationsService.notify('Updated Bust HTTP Call');
    return this.httpClient.patch<Bust>(this.getUrlById(busts.id), busts);
  }

  delete(id: number) {
    this.notificationsService.notify('Deleted Bust HTTP Call');
    return this.httpClient.delete(this.getUrlById(id));
  }

  private getUrl() {
    return `${this.environment.apiUrl}${this.model}`;
  }

  private getUrlById(id) {
    return `${this.getUrl()}/${id}`;
  }
}
