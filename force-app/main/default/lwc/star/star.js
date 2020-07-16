import { LightningElement, api } from 'lwc'
import LIGHTNING_KIT from '@salesforce/resourceUrl/LightningKit'

const SIZES = [
  'xx-small',
  'x-small',
  'small',
  'medium',
  'large',
  'x-large',
  'xx-large'
]

export default class Star extends LightningElement {
  @api star

  @api readOnly = false
  @api activeColor = '#ffd055'
  @api inactiveColor = '#d8d8d8'

  _size = 'small'
  @api
  get size () { return this._size }

  set size (val) {
    if (!SIZES.includes(val)) {
      throw new Error(`Error in Star.js. Invalid value assigned to size attribute. Valid attributes are ${SIZES.join(', ')}`)
    }
    this._size = val
  }

  clickStar () {
    if (!this.readOnly) {
      const selected = new CustomEvent('selected', { detail: this.star.id })
      this.dispatchEvent(selected)
    }
  }

  get resourceUrl () { return LIGHTNING_KIT }
  get resourcePath () { return 'svg/symbols.svg' }
  get sfIconName () { return 'salesforce' }
  get iconName () { return 'star' }

  get salesforceIcon () {
    const resource = `${LIGHTNING_KIT}/svg/symbols.svg#salesforce`
    console.log('resource', resource)
    return resource
  }

  get starIcon () { return `${LIGHTNING_KIT}/svg/symbols.svg#star` }
  get classes () {
    const classes = []
    // classes.push(this.size)
    classes.push(this.isReadOnly())
    return classes.join(' ')
  }

  isReadOnly () {
    return this.readOnly ? '' : 'clickable'
  }

  get color () {
    return (this.star.isActive ? this.activeColor : this.inactiveColor)
  }
}
