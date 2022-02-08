import Swal, { SweetAlertIcon, SweetAlertOptions } from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { BasicOpts, WithButtonOpts } from './toast'

/** wrap Swal with WRC so it will be react friendly. Able to pass JSX. */
export const SwalWrc = withReactContent(Swal)

const base = {
  /**
   *
   * @param param0
   * @returns
   */
  withoutButton: ({
    position = 'top-end',
    timer = 5000,
    timerProgressBar = true,
  }: Partial<BasicOpts> = {}) => {
    const opts: SweetAlertOptions<any, any> = {
      toast: true,
      showCloseButton: true,
      showConfirmButton: false,
      position,
      timer,
      timerProgressBar,
      didOpen: toast => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      },
    }

    return SwalWrc.mixin(opts)
  },

  /**
   *
   * @param param0
   * @returns
   */
  withButton: ({
    position = 'top-end',
    timer = undefined,
    timerProgressBar = false,
    confirmButtonText = 'OK',
    denyButtonText = 'No',
    cancelButtonText = 'Cancel',
    showConfirmButton = true,
    showDenyButton = false,
    showCancelButton = false,
    showCloseButton = false,
    icon,
  }: Partial<WithButtonOpts> & { icon: SweetAlertIcon }) => {
    const fullBtn = 'w-full mx-auto py-1 px-4 rounded font-bold'
    const btn = {
      success: 'bg-green-100 text-green-700 hover:bg-green-200 focus:bg-green-300',
      info: 'bg-blue-100 text-blue-700 hover:bg-blue-200 focus:bg-blue-300',
      error: 'bg-red-100 text-red-700 hover:bg-red-200 focus:bg-red-300',
      pink: 'bg-pink-100 text-pink-700 hover:bg-pink-200 focus:bg-pink-300',
      warning: 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200 focus:bg-yellow-300',
      question: 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200 focus:bg-indigo-300',
      deny: 'text-red-700 hover:bg-red-100 focus:bg-red-200',
      cancel: 'hover:bg-gray-100 focus:bg-gray-200',
    }

    const opts: SweetAlertOptions<any, any> = {
      toast: true,
      buttonsStyling: false, // always false, always need custom style to override the default
      customClass: {
        confirmButton: `${fullBtn} ${btn[icon]}`,
        denyButton: `${fullBtn} ${btn.deny}`,
        cancelButton: `${fullBtn} ${btn.cancel}`,
        actions: 'flex gap-1',
      },
      confirmButtonText,
      denyButtonText,
      cancelButtonText,
      showConfirmButton,
      showDenyButton,
      showCancelButton,
      showCloseButton,
      position,
      timer,
      timerProgressBar,
      didOpen: toast => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      },
    }

    return SwalWrc.mixin(opts)
  },
}

export default base
