import { ChatAlt2Icon, MoonIcon } from '@heroicons/react/outline'
import { useState } from 'react'
import PageSection from 'src/components/atoms/PageSection'
import PatternBox from 'src/components/atoms/PatternBox'
import PatternBoxRow from 'src/components/atoms/PatternBoxRow'
import SectionTitle from 'src/components/atoms/SectionTitle'
import Button, { ButtonVariant } from 'src/components/molecules/Button'
import ButtonLoading from 'src/components/molecules/ButtonLoading'
import { capsEveryFirstLetter } from 'src/helpers/textUtils'

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
  const iconForButton2 = MoonIcon

  return (
    <>
      <div className="flex flex-col gap-10">
        <PageSection>
          <SectionTitle>Variants</SectionTitle>

          <PatternBox>
            {/* Default */}
            <PatternBoxRow>
              {(variant = 'default') && undefined}
              <Button variant={variant}>{getText('text-only', variant)}</Button>
              <Button variant={variant} iconBefore={iconForButton}>
                {getText('with-icon')}
              </Button>
              <Button variant={variant} iconBefore={iconForButton} />
            </PatternBoxRow>

            {/* Subtle */}
            <PatternBoxRow>
              {(variant = 'subtle') && undefined}
              <Button variant={variant}>{getText('text-only', variant)}</Button>
              <Button variant={variant} iconBefore={iconForButton}>
                {getText('with-icon')}
              </Button>
              <Button variant={variant} iconBefore={iconForButton} />
            </PatternBoxRow>

            {/* Link */}
            <PatternBoxRow>
              {(variant = 'link') && undefined}
              <Button variant={variant}>{getText('text-only', variant)}</Button>
              <Button variant={variant} iconBefore={iconForButton}>
                {getText('with-icon')}
              </Button>
              <Button variant={variant} iconBefore={iconForButton} />
            </PatternBoxRow>

            {/* Subtle Link */}
            <PatternBoxRow>
              {(variant = 'subtle-link') && undefined}
              <Button variant={variant}>{getText('text-only', variant)}</Button>
              <Button variant={variant} iconBefore={iconForButton}>
                {getText('with-icon')}
              </Button>
              <Button variant={variant} iconBefore={iconForButton} />
            </PatternBoxRow>

            {/* Primary */}
            <PatternBoxRow>
              {(variant = 'primary') && undefined}
              <Button variant={variant}>{getText('text-only', variant)}</Button>
              <Button variant={variant} iconBefore={iconForButton}>
                {getText('with-icon')}
              </Button>
              <Button variant={variant} iconBefore={iconForButton} />
            </PatternBoxRow>

            {/* Warning */}
            <PatternBoxRow>
              {(variant = 'warning') && undefined}
              <Button variant={variant}>{getText('text-only', variant)}</Button>
              <Button variant={variant} iconBefore={iconForButton}>
                {getText('with-icon')}
              </Button>
              <Button variant={variant} iconBefore={iconForButton} />
            </PatternBoxRow>

            {/* Danger */}
            <PatternBoxRow>
              {(variant = 'danger') && undefined}
              <Button variant={variant}>{getText('text-only', variant)}</Button>
              <Button variant={variant} iconBefore={iconForButton}>
                {getText('with-icon')}
              </Button>
              <Button variant={variant} iconBefore={iconForButton} />
            </PatternBoxRow>
          </PatternBox>
        </PageSection>

        <PageSection>
          <SectionTitle>isDisabled & isSelected</SectionTitle>

          <PatternBox>
            {/* Danger + disabled */}
            <PatternBoxRow>
              {(variant = 'danger') && undefined}
              <Button variant={variant} isDisabled>
                {getText('text-only', variant)} + disabled state
              </Button>
              <Button variant={variant} iconBefore={iconForButton} isDisabled>
                {getText('with-icon')}
              </Button>
              <Button variant={variant} iconBefore={iconForButton} isDisabled />
            </PatternBoxRow>

            {/* Primary + selected */}
            <PatternBoxRow>
              {(variant = 'primary') && undefined}
              <Button variant={variant} isSelected>
                {getText('text-only', variant)} + selected state
              </Button>
              <Button variant={variant} iconBefore={iconForButton} isSelected>
                {getText('with-icon')}
              </Button>
              <Button variant={variant} iconBefore={iconForButton} isSelected />
            </PatternBoxRow>
          </PatternBox>
        </PageSection>

        <PageSection>
          <SectionTitle>isLoading</SectionTitle>

          <PatternBox>
            {/* Default + loading */}
            <PatternBoxRow>
              {(variant = 'default') && undefined}
              <ButtonLoading
                variant={variant}
                onClick={() => handleClick(0)}
                isLoading={isLoadingObj[0]}
              >
                {getText('text-only', variant)} + loading state
              </ButtonLoading>
              <div>
                <ButtonLoading
                  variant={variant}
                  onClick={() => handleClick(1)}
                  isLoading={isLoadingObj[1]}
                  iconBefore={iconForButton2}
                >
                  {getText('with-icon')}
                </ButtonLoading>
              </div>
              <div>
                <ButtonLoading
                  variant={variant}
                  onClick={() => handleClick(2)}
                  isLoading={isLoadingObj[2]}
                  iconBefore={iconForButton2}
                />
              </div>
            </PatternBoxRow>

            {/* Subtle + loading */}
            <PatternBoxRow>
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
                iconBefore={iconForButton2}
              >
                {getText('with-icon')}
              </ButtonLoading>
              <ButtonLoading
                variant={variant}
                onClick={() => handleClick(5)}
                isLoading={isLoadingObj[5]}
                iconBefore={iconForButton2}
              />
            </PatternBoxRow>

            {/* Primary + loading */}
            <PatternBoxRow>
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
                iconBefore={iconForButton2}
              >
                {getText('with-icon')}
              </ButtonLoading>
              <ButtonLoading
                variant={variant}
                onClick={() => handleClick(8)}
                isLoading={isLoadingObj[8]}
                iconBefore={iconForButton2}
              />
            </PatternBoxRow>

            {/* Warning + loading */}
            <PatternBoxRow>
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
                iconBefore={iconForButton2}
              >
                {getText('with-icon')}
              </ButtonLoading>
              <ButtonLoading
                variant={variant}
                onClick={() => handleClick(11)}
                isLoading={isLoadingObj[11]}
                iconBefore={iconForButton2}
              />
            </PatternBoxRow>

            {/* Danger + loading */}
            <PatternBoxRow>
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
                iconBefore={iconForButton2}
              >
                {getText('with-icon')}
              </ButtonLoading>
              <ButtonLoading
                variant={variant}
                onClick={() => handleClick(14)}
                isLoading={isLoadingObj[14]}
                iconBefore={iconForButton2}
              />
            </PatternBoxRow>
          </PatternBox>
        </PageSection>

        <PageSection>
          <SectionTitle>Sizing</SectionTitle>

          <PatternBox>
            {/* Primary + sizing default */}
            <PatternBoxRow>
              <div>
                {(variant = 'primary') && undefined}
                <Button variant={variant} sizing="fat">
                  Fat button
                </Button>
              </div>
              <div>
                <Button variant={variant} sizing="wide">
                  Wide button
                </Button>
              </div>
              <div>
                <Button variant={variant} sizing="default">
                  Default button
                </Button>
              </div>
              <div>
                <Button variant={variant} sizing="compact">
                  Compact button
                </Button>
              </div>
              <div>
                {(variant = 'subtle-link') && undefined}
                <Button variant={variant} sizing="none">
                  None button
                </Button>
              </div>
            </PatternBoxRow>

            {/* Primary + sizing default */}
            <PatternBoxRow>
              {(variant = 'primary') && undefined}
              <Button variant={variant} sizing="default" className="w-full">
                {getText('text-only', variant)} with full container width
              </Button>
            </PatternBoxRow>
            <PatternBoxRow>
              <Button
                variant={variant}
                sizing="default"
                className="w-full"
                iconBefore={iconForButton2}
              >
                {getText('with-icon', variant)}
              </Button>
            </PatternBoxRow>
          </PatternBox>
        </PageSection>
      </div>
    </>
  )
}

export default ButtonPage
