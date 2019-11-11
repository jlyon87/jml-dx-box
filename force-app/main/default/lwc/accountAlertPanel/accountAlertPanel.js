import { LightningElement, api, track } from 'lwc'
import getAlertsByAccount from '@salesforce/apex/AccountAlertPanelAuraService.getAlertsByAccount'

export default class AccountAlertPanel extends LightningElement {
  @api recordId
  @track alerts

  connectedCallback () {
    this.fetchAlerts()
  }

  fetchAlerts () {
    getAlertsByAccount({ accountId: this.recordId })
      .then(data => {
        this.alerts = data
      })
      .catch(err => {
        console.error('error getting alerts', err.message)
      })
  }
}