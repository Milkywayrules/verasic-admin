import base from './base'
import extended from './extended'

export default {
  _base: { ...base },
  ...extended,
}
