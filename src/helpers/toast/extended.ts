import { SweetAlertIcon } from 'sweetalert2'
import base from './base'
import { BasicOpts, ConfirmToastOpts, DecideToastOpts, DecideWithCancelToastOpts } from './toast'

/**
 * Basic toast without any button and action. Only text and icon.
 *
 * @param title what text should be displayed on toast
 * @param icon what type of icon should be displayed. This will affect the button theme too.
 * @param opts options object for any additional configuration
 */
const basic = (title: string, icon: SweetAlertIcon = 'success', opts?: Partial<BasicOpts>) => {
  base.withoutButton(opts).fire({ icon, title })
}

/**
 * Confirmation toast with confirm button and text.
 *
 * @param title what text should be displayed on toast
 * @param icon what type of icon should be displayed. This will affect the button theme too.
 * @param opts options object for any additional configuration
 */
const confirm = (
  title: string,
  icon: SweetAlertIcon = 'success',
  { confirmButtonText = 'OK', ...opts }: ConfirmToastOpts = {},
) => {
  base.withButton({ confirmButtonText, icon }).mixin(opts).fire({ title, icon })
}

/**
 * Decider toast with confirm button, deny button, and text.
 *
 * @param title what text should be displayed on toast
 * @param icon what type of icon should be displayed. This will affect the button theme too.
 * @param opts options object for any additional configuration
 */
const decide = (
  title: string,
  icon: SweetAlertIcon = 'success',
  { confirmButtonText = 'OK', denyButtonText = 'No', ...opts }: DecideToastOpts = {},
) => {
  base
    .withButton({
      confirmButtonText,
      denyButtonText,
      showDenyButton: true,
      icon,
    })
    .mixin(opts)
    .fire({ title, icon })
}

/**
 * Decider toast with confirm button, deny button, and text (+ cancel button).
 *
 * @param title what text should be displayed on toast
 * @param icon what type of icon should be displayed. This will affect the button theme too.
 * @param opts options object for any additional configuration
 */
const decideWithCancel = (
  title: string,
  icon: SweetAlertIcon = 'success',
  {
    confirmButtonText = 'OK',
    denyButtonText = 'No',
    cancelButtonText = 'Cancel',
    ...opts
  }: DecideWithCancelToastOpts = {},
) => {
  base
    .withButton({
      confirmButtonText,
      denyButtonText,
      cancelButtonText,
      showDenyButton: true,
      showCancelButton: true,
      icon,
    })
    .mixin(opts)
    .fire({ title, icon })
}

const extended = {
  basic,
  confirm,
  decide,
  decideWithCancel,
}

export default extended
