import SeatGeekPerformer from './SeatGeekPerformer';
import SeatGeekEvent from './SeatGeekEvent';

export default class SeatGeek {
  constructor(clientId) {
    if(!clientId || clientId.length < 1){ throw Error('API Key required'); }
    this.Event = new SeatGeekEvent(clientId);
    this.Performer = new SeatGeekPerformer(clientId);
    return this;
  }
}
