import { SweetAlertOptions } from 'sweetalert2'

type BasicOpts = Pick<SweetAlertOptions, 'position' | 'timer' | 'timerProgressBar'>

type WithButtonOpts = Pick<
  SweetAlertOptions,
  | keyof BasicOpts
  | 'confirmButtonText'
  | 'cancelButtonText'
  | 'denyButtonText'
  | 'showConfirmButton'
  | 'showCancelButton'
  | 'showDenyButton'
  | 'showCloseButton'
>

type BaseExtendedToastOpts = Pick<
  SweetAlertOptions,
  'didClose' | 'didDestroy' | 'didOpen' | 'didRender' | 'willClose' | 'willOpen'
>

type ConfirmToastOpts = BaseExtendedToastOpts &
  Pick<SweetAlertOptions, 'confirmButtonText' | 'preConfirm'>

type DecideToastOpts = ConfirmToastOpts & Pick<SweetAlertOptions, 'denyButtonText' | 'preDeny'>

type DecideWithCancelToastOpts = DecideToastOpts & Pick<SweetAlertOptions, 'cancelButtonText'>
