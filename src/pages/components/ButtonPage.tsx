import { ChatAlt2Icon, MoonIcon } from '@heroicons/react/outline'
import { CSSProperties, FC, useState } from 'react'
import Button, { ButtonVariant } from 'src/components/molecules/Button'
import ButtonLoading from 'src/components/molecules/ButtonLoading'
import { capsEveryFirstLetter } from 'src/helpers/textUtils'

type StyleType = {
  [A: string]: {
    [B: string]: {
      light: CSSProperties
      dark: CSSProperties
    }
  }
}

/**
 *
 */
const style: StyleType = {
  bgPatterns: {
    endlessClouds: {
      dark: {
        backgroundColor: '#ffffff',
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56 28' width='56' height='28'%3E%3Cpath fill='%23dcdcdc' fill-opacity='1' d='M56 26v2h-7.75c2.3-1.27 4.94-2 7.75-2zm-26 2a2 2 0 1 0-4 0h-4.09A25.98 25.98 0 0 0 0 16v-2c.67 0 1.34.02 2 .07V14a2 2 0 0 0-2-2v-2a4 4 0 0 1 3.98 3.6 28.09 28.09 0 0 1 2.8-3.86A8 8 0 0 0 0 6V4a9.99 9.99 0 0 1 8.17 4.23c.94-.95 1.96-1.83 3.03-2.63A13.98 13.98 0 0 0 0 0h7.75c2 1.1 3.73 2.63 5.1 4.45 1.12-.72 2.3-1.37 3.53-1.93A20.1 20.1 0 0 0 14.28 0h2.7c.45.56.88 1.14 1.29 1.74 1.3-.48 2.63-.87 4-1.15-.11-.2-.23-.4-.36-.59H26v.07a28.4 28.4 0 0 1 4 0V0h4.09l-.37.59c1.38.28 2.72.67 4.01 1.15.4-.6.84-1.18 1.3-1.74h2.69a20.1 20.1 0 0 0-2.1 2.52c1.23.56 2.41 1.2 3.54 1.93A16.08 16.08 0 0 1 48.25 0H56c-4.58 0-8.65 2.2-11.2 5.6 1.07.8 2.09 1.68 3.03 2.63A9.99 9.99 0 0 1 56 4v2a8 8 0 0 0-6.77 3.74c1.03 1.2 1.97 2.5 2.79 3.86A4 4 0 0 1 56 10v2a2 2 0 0 0-2 2.07 28.4 28.4 0 0 1 2-.07v2c-9.2 0-17.3 4.78-21.91 12H30zM7.75 28H0v-2c2.81 0 5.46.73 7.75 2zM56 20v2c-5.6 0-10.65 2.3-14.28 6h-2.7c4.04-4.89 10.15-8 16.98-8zm-39.03 8h-2.69C10.65 24.3 5.6 22 0 22v-2c6.83 0 12.94 3.11 16.97 8zm15.01-.4a28.09 28.09 0 0 1 2.8-3.86 8 8 0 0 0-13.55 0c1.03 1.2 1.97 2.5 2.79 3.86a4 4 0 0 1 7.96 0zm14.29-11.86c1.3-.48 2.63-.87 4-1.15a25.99 25.99 0 0 0-44.55 0c1.38.28 2.72.67 4.01 1.15a21.98 21.98 0 0 1 36.54 0zm-5.43 2.71c1.13-.72 2.3-1.37 3.54-1.93a19.98 19.98 0 0 0-32.76 0c1.23.56 2.41 1.2 3.54 1.93a15.98 15.98 0 0 1 25.68 0zm-4.67 3.78c.94-.95 1.96-1.83 3.03-2.63a13.98 13.98 0 0 0-22.4 0c1.07.8 2.09 1.68 3.03 2.63a9.99 9.99 0 0 1 16.34 0z'%3E%3C/path%3E%3C/svg%3E")`,
      },
      light: {
        backgroundColor: '#ffffff',
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56 28' width='56' height='28'%3E%3Cpath fill='%23eeeef4' fill-opacity='1' d='M56 26v2h-7.75c2.3-1.27 4.94-2 7.75-2zm-26 2a2 2 0 1 0-4 0h-4.09A25.98 25.98 0 0 0 0 16v-2c.67 0 1.34.02 2 .07V14a2 2 0 0 0-2-2v-2a4 4 0 0 1 3.98 3.6 28.09 28.09 0 0 1 2.8-3.86A8 8 0 0 0 0 6V4a9.99 9.99 0 0 1 8.17 4.23c.94-.95 1.96-1.83 3.03-2.63A13.98 13.98 0 0 0 0 0h7.75c2 1.1 3.73 2.63 5.1 4.45 1.12-.72 2.3-1.37 3.53-1.93A20.1 20.1 0 0 0 14.28 0h2.7c.45.56.88 1.14 1.29 1.74 1.3-.48 2.63-.87 4-1.15-.11-.2-.23-.4-.36-.59H26v.07a28.4 28.4 0 0 1 4 0V0h4.09l-.37.59c1.38.28 2.72.67 4.01 1.15.4-.6.84-1.18 1.3-1.74h2.69a20.1 20.1 0 0 0-2.1 2.52c1.23.56 2.41 1.2 3.54 1.93A16.08 16.08 0 0 1 48.25 0H56c-4.58 0-8.65 2.2-11.2 5.6 1.07.8 2.09 1.68 3.03 2.63A9.99 9.99 0 0 1 56 4v2a8 8 0 0 0-6.77 3.74c1.03 1.2 1.97 2.5 2.79 3.86A4 4 0 0 1 56 10v2a2 2 0 0 0-2 2.07 28.4 28.4 0 0 1 2-.07v2c-9.2 0-17.3 4.78-21.91 12H30zM7.75 28H0v-2c2.81 0 5.46.73 7.75 2zM56 20v2c-5.6 0-10.65 2.3-14.28 6h-2.7c4.04-4.89 10.15-8 16.98-8zm-39.03 8h-2.69C10.65 24.3 5.6 22 0 22v-2c6.83 0 12.94 3.11 16.97 8zm15.01-.4a28.09 28.09 0 0 1 2.8-3.86 8 8 0 0 0-13.55 0c1.03 1.2 1.97 2.5 2.79 3.86a4 4 0 0 1 7.96 0zm14.29-11.86c1.3-.48 2.63-.87 4-1.15a25.99 25.99 0 0 0-44.55 0c1.38.28 2.72.67 4.01 1.15a21.98 21.98 0 0 1 36.54 0zm-5.43 2.71c1.13-.72 2.3-1.37 3.54-1.93a19.98 19.98 0 0 0-32.76 0c1.23.56 2.41 1.2 3.54 1.93a15.98 15.98 0 0 1 25.68 0zm-4.67 3.78c.94-.95 1.96-1.83 3.03-2.63a13.98 13.98 0 0 0-22.4 0c1.07.8 2.09 1.68 3.03 2.63a9.99 9.99 0 0 1 16.34 0z'%3E%3C/path%3E%3C/svg%3E")`,
      },
    },
  },
}

/**
 *
 */
const getText = (type: 'text-only' | 'with-icon', btnType?: ButtonVariant) => {
  if (type === 'text-only' && btnType)
    return `${capsEveryFirstLetter(btnType.split('-').join(' '))} button`
  if (type === 'with-icon') return 'With icon'
  return ''
}

/**
 *
 */
const ContainerPattern: FC = ({ children }) => {
  return (
    <div
      className="mt-3 flex flex-col gap-5 rounded border-2 border-gray-400 bg-gray-100 px-8 py-12"
      style={style.bgPatterns.endlessClouds.light}
    >
      {children}
    </div>
  )
}

/**
 *
 */
const SubTitle: FC = ({ children }) => <h2 className="text-xl font-bold">{children}</h2>

/**
 *
 */
const ButtonPage = () => {
  console.log('render: button page')

  const [isLoadingObj, setIsLoadingObj] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
    12: false,
    13: false,
    14: false,
  })

  const handleClick = (key: number) =>
    setIsLoadingObj(state => ({ ...state, [key]: !isLoadingObj[key] }))

  let variant: ButtonVariant = 'default'
  const iconForButton = ChatAlt2Icon

  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="">
          <SubTitle>Variants</SubTitle>

          <ContainerPattern>
            {/* Default */}
            <div className="flex gap-1">
              {(variant = 'default') && undefined}
              <Button variant={variant}>{getText('text-only', variant)}</Button>
              <Button variant={variant} iconBefore={iconForButton}>
                {getText('with-icon')}
              </Button>
              <Button variant={variant} iconBefore={iconForButton} />
            </div>

            {/* Subtle */}
            <div className="flex gap-1">
              {(variant = 'subtle') && undefined}
              <Button variant={variant}>{getText('text-only', variant)}</Button>
              <Button variant={variant} iconBefore={iconForButton}>
                {getText('with-icon')}
              </Button>
              <Button variant={variant} iconBefore={iconForButton} />
            </div>

            {/* Link */}
            <div className="flex gap-1">
              {(variant = 'link') && undefined}
              <Button variant={variant}>{getText('text-only', variant)}</Button>
              <Button variant={variant} iconBefore={iconForButton}>
                {getText('with-icon')}
              </Button>
              <Button variant={variant} iconBefore={iconForButton} />
            </div>

            {/* Subtle Link */}
            <div className="flex gap-1">
              {(variant = 'subtle-link') && undefined}
              <Button variant={variant}>{getText('text-only', variant)}</Button>
              <Button variant={variant} iconBefore={iconForButton}>
                {getText('with-icon')}
              </Button>
              <Button variant={variant} iconBefore={iconForButton} />
            </div>

            {/* Primary */}
            <div className="flex gap-1">
              {(variant = 'primary') && undefined}
              <Button variant={variant}>{getText('text-only', variant)}</Button>
              <Button variant={variant} iconBefore={iconForButton}>
                {getText('with-icon')}
              </Button>
              <Button variant={variant} iconBefore={iconForButton} />
            </div>

            {/* Warning */}
            <div className="flex gap-1">
              {(variant = 'warning') && undefined}
              <Button variant={variant}>{getText('text-only', variant)}</Button>
              <Button variant={variant} iconBefore={iconForButton}>
                {getText('with-icon')}
              </Button>
              <Button variant={variant} iconBefore={iconForButton} />
            </div>

            {/* Danger */}
            <div className="flex gap-1">
              {(variant = 'danger') && undefined}
              <Button variant={variant}>{getText('text-only', variant)}</Button>
              <Button variant={variant} iconBefore={iconForButton}>
                {getText('with-icon')}
              </Button>
              <Button variant={variant} iconBefore={iconForButton} />
            </div>
          </ContainerPattern>
        </div>

        <div className="">
          <SubTitle>isDisabled & isSelected</SubTitle>

          <ContainerPattern>
            {/* Danger + disabled */}
            <div className="flex gap-1">
              {(variant = 'danger') && undefined}
              <Button variant={variant} isDisabled>
                {getText('text-only', variant)} + disabled state
              </Button>
              <Button variant={variant} iconBefore={iconForButton} isDisabled>
                {getText('with-icon')}
              </Button>
              <Button variant={variant} iconBefore={iconForButton} isDisabled />
            </div>

            {/* Primary + selected */}
            <div className="flex gap-1">
              {(variant = 'primary') && undefined}
              <Button variant={variant} isSelected>
                {getText('text-only', variant)} + selected state
              </Button>
              <Button variant={variant} iconBefore={iconForButton} isSelected>
                {getText('with-icon')}
              </Button>
              <Button variant={variant} iconBefore={iconForButton} isSelected />
            </div>
          </ContainerPattern>
        </div>

        <div className="">
          <SubTitle>isLoading</SubTitle>

          <ContainerPattern>
            {/* Default + loading */}
            <div className="flex gap-1">
              {(variant = 'default') && undefined}
              <ButtonLoading
                variant={variant}
                onClick={() => handleClick(0)}
                isLoading={isLoadingObj[0]}
              >
                {getText('text-only', variant)} + loading state
              </ButtonLoading>
              <ButtonLoading
                onClick={() => handleClick(1)}
                isLoading={isLoadingObj[1]}
                iconBefore={MoonIcon}
              >
                {getText('with-icon')}
              </ButtonLoading>
              <ButtonLoading
                onClick={() => handleClick(2)}
                isLoading={isLoadingObj[2]}
                iconBefore={MoonIcon}
              />
            </div>

            {/* Subtle + loading */}
            <div className="flex gap-1">
              {(variant = 'subtle') && undefined}
              <ButtonLoading
                variant={variant}
                onClick={() => handleClick(3)}
                isLoading={isLoadingObj[3]}
              >
                {getText('text-only', variant)} + loading state
              </ButtonLoading>
              <ButtonLoading
                variant={variant}
                onClick={() => handleClick(4)}
                isLoading={isLoadingObj[4]}
                iconBefore={MoonIcon}
              >
                {getText('with-icon')}
              </ButtonLoading>
              <ButtonLoading
                variant={variant}
                onClick={() => handleClick(5)}
                isLoading={isLoadingObj[5]}
                iconBefore={MoonIcon}
              />
            </div>

            {/* Primary + loading */}
            <div className="flex gap-1">
              {(variant = 'primary') && undefined}
              <ButtonLoading
                variant={variant}
                onClick={() => handleClick(6)}
                isLoading={isLoadingObj[6]}
              >
                {getText('text-only', variant)} + loading state
              </ButtonLoading>
              <ButtonLoading
                variant={variant}
                onClick={() => handleClick(7)}
                isLoading={isLoadingObj[7]}
                iconBefore={MoonIcon}
              >
                {getText('with-icon')}
              </ButtonLoading>
              <ButtonLoading
                variant={variant}
                onClick={() => handleClick(8)}
                isLoading={isLoadingObj[8]}
                iconBefore={MoonIcon}
              />
            </div>

            {/* Warning + loading */}
            <div className="flex gap-1">
              {(variant = 'warning') && undefined}
              <ButtonLoading
                variant={variant}
                onClick={() => handleClick(9)}
                isLoading={isLoadingObj[9]}
              >
                {getText('text-only', variant)} + loading state
              </ButtonLoading>
              <ButtonLoading
                variant={variant}
                onClick={() => handleClick(10)}
                isLoading={isLoadingObj[10]}
                iconBefore={MoonIcon}
              >
                {getText('with-icon')}
              </ButtonLoading>
              <ButtonLoading
                variant={variant}
                onClick={() => handleClick(11)}
                isLoading={isLoadingObj[11]}
                iconBefore={MoonIcon}
              />
            </div>

            {/* Danger + loading */}
            <div className="flex gap-1">
              {(variant = 'danger') && undefined}
              <ButtonLoading
                variant={variant}
                onClick={() => handleClick(12)}
                isLoading={isLoadingObj[12]}
              >
                {getText('text-only', variant)} + loading state
              </ButtonLoading>
              <ButtonLoading
                variant={variant}
                onClick={() => handleClick(13)}
                isLoading={isLoadingObj[13]}
                iconBefore={MoonIcon}
              >
                {getText('with-icon')}
              </ButtonLoading>
              <ButtonLoading
                variant={variant}
                onClick={() => handleClick(14)}
                isLoading={isLoadingObj[14]}
                iconBefore={MoonIcon}
              />
            </div>
          </ContainerPattern>
        </div>
      </div>
    </>
  )
}

export default ButtonPage
