import extended from './extended'

const custom = {
  // write your custom toast here as a method, extending the "base" or "extended" toast
  // and  it will automagically exported to toast helper and available globally

  /**
   * Describe your method here
   */
  _test_() {},

  /**
   * Describe your method here
   *
   * @param title some explanation about the param
   */
  _test2_(title: string) {
    extended.basic(title)
  },
}

export default custom
