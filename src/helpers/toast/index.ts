import base from './base'
import custom from './custom'
import extended from './extended'

const toast = {
  /**
   * This is base wrapper for the toast. You probably don't need this.
   */
  _base: { ...base },

  /**
   * Extended version from the base wrapper.
   * You probably want to use this.
   * Except you want the theme to suit better to your design system, then use custom.
   */
  ...extended,

  /**
   * Custom version, tailored to your needs by yourself.
   */
  custom,
}

export default toast
