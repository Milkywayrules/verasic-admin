import PageSection from 'src/components/atoms/PageSection'
import PatternBox from 'src/components/atoms/PatternBox'
import SectionTitle from 'src/components/atoms/SectionTitle'
import Button from 'src/components/molecules/Button'
import toast from 'src/helpers/toast'
import { SweetAlertIcon } from 'sweetalert2'

const ToastPage = () => {
  const handleToastBasic = (icon: SweetAlertIcon) => {
    toast.basic('Fired! 🔥🔥🔥', icon)
  }

  const handleToastConfirmation = (icon: SweetAlertIcon, confirmButtonText: string) => {
    toast.confirm('Fired! 🔥🔥🔥', icon, { confirmButtonText })
  }

  const handleToastDecide = (
    icon: SweetAlertIcon,
    confirmButtonText: string,
    denyButtonText: string,
  ) => {
    toast.decide('Fired! 🔥🔥🔥', icon, { confirmButtonText, denyButtonText })
  }

  const handleToastDecideWithCancel = (
    icon: SweetAlertIcon,
    confirmButtonText: string,
    denyButtonText: string,
  ) => {
    toast.decideWithCancel('Fired! 🔥🔥🔥', icon, {
      confirmButtonText,
      denyButtonText,
    })
  }

  return (
    <>
      <div className="flex flex-col gap-10">
        <PageSection>
          <SectionTitle>Simple Basic</SectionTitle>

          <PatternBox>
            <div className="flex flex-col gap-3">
              <div>
                <Button variant="primary" onClick={() => handleToastBasic('success')}>
                  Success toast
                </Button>
              </div>

              <div>
                <Button variant="default" onClick={() => handleToastBasic('info')}>
                  Info toast
                </Button>
              </div>

              <div>
                <Button variant="subtle" onClick={() => handleToastBasic('question')}>
                  Question toast
                </Button>
              </div>

              <div>
                <Button variant="warning" onClick={() => handleToastBasic('warning')}>
                  Warning toast
                </Button>
              </div>

              <div>
                <Button variant="danger" onClick={() => handleToastBasic('error')}>
                  Error toast
                </Button>
              </div>
            </div>
          </PatternBox>
        </PageSection>

        <PageSection>
          <SectionTitle>With Confirmation</SectionTitle>

          <PatternBox>
            <div className="flex flex-col gap-3">
              <div>
                <Button variant="primary" onClick={() => handleToastConfirmation('success', 'OK')}>
                  Success toast
                </Button>
              </div>

              <div>
                <Button variant="default" onClick={() => handleToastConfirmation('info', 'OK')}>
                  Info toast
                </Button>
              </div>

              <div>
                <Button
                  variant="subtle"
                  onClick={() => handleToastConfirmation('question', 'Accept')}
                >
                  Question toast
                </Button>
              </div>

              <div>
                <Button
                  variant="warning"
                  onClick={() => handleToastConfirmation('warning', 'Understand')}
                >
                  Warning toast
                </Button>
              </div>

              <div>
                <Button
                  variant="danger"
                  onClick={() => handleToastConfirmation('error', 'Fix now')}
                >
                  Error toast
                </Button>
              </div>
            </div>
          </PatternBox>
        </PageSection>

        <PageSection>
          <SectionTitle>With Yes or No (decide button)</SectionTitle>

          <PatternBox>
            <div className="flex flex-col gap-3">
              <div>
                <Button
                  variant="subtle"
                  onClick={() => handleToastDecide('question', 'Accept', 'Decline')}
                >
                  Question toast
                </Button>
              </div>

              <div>
                <Button
                  variant="warning"
                  onClick={() => handleToastDecide('warning', 'Understand', 'Decline')}
                >
                  Warning toast
                </Button>
              </div>

              <div>
                <Button
                  variant="danger"
                  onClick={() => handleToastDecide('error', 'Fix now', 'Later')}
                >
                  Error toast
                </Button>
              </div>
            </div>
          </PatternBox>
        </PageSection>

        <PageSection>
          <SectionTitle>With Yes, No, and Cancel (decide with cancel button)</SectionTitle>

          <PatternBox>
            <div className="flex flex-col gap-3">
              <div>
                <Button
                  variant="subtle"
                  onClick={() => handleToastDecideWithCancel('question', 'Accept', 'Decline')}
                >
                  Question toast
                </Button>
              </div>

              <div>
                <Button
                  variant="warning"
                  onClick={() => handleToastDecideWithCancel('warning', 'Understand', 'Decline')}
                >
                  Warning toast
                </Button>
              </div>

              <div>
                <Button
                  variant="danger"
                  onClick={() => handleToastDecideWithCancel('error', 'Fix now', 'Later')}
                >
                  Error toast
                </Button>
              </div>
            </div>
          </PatternBox>
        </PageSection>
      </div>
    </>
  )
}

export default ToastPage
