import { MicrophoneIcon, MoonIcon } from '@heroicons/react/outline'
import { ArrowNarrowRightIcon, ClockIcon } from '@heroicons/react/solid'
import PageSection from 'src/components/atoms/PageSection'
import PatternBox from 'src/components/atoms/PatternBox'
import PatternBoxRow from 'src/components/atoms/PatternBoxRow'
import SectionTitle from 'src/components/atoms/SectionTitle'
import Badge, {
  BadgeShape,
  BadgeSize,
  BadgeVariant,
  BadgeWeight,
} from 'src/components/molecules/Badge'
import { useTitle } from 'src/hooks/useTitle'

const BadgePage = () => {
  useTitle('Badges')

  let size: BadgeSize
  let shape: BadgeShape
  let variant: BadgeVariant
  let weight: BadgeWeight

  return (
    <>
      <div className="flex flex-col gap-10">
        <PageSection>
          <SectionTitle>Variants</SectionTitle>

          <PatternBox>
            <PatternBoxRow>
              {(size = 'default') && undefined}
              <div>
                <Badge
                  size={size}
                  shape="default"
                  variant="default"
                  id="first-badge"
                  title="first badge"
                >
                  Default badge
                </Badge>
              </div>
              <div>
                <Badge size={size} shape="default" variant="primary">
                  Primary badge
                </Badge>
              </div>
              <div>
                <Badge size={size} shape="default" variant="primary-inverted">
                  Primary-inverted badge
                </Badge>
              </div>
              <div>
                <Badge size={size} shape="default" variant="positive">
                  Positive badge
                </Badge>
              </div>
              <div>
                <Badge size={size} shape="default" variant="negative">
                  Negative badge
                </Badge>
              </div>
              <div>
                <Badge size={size} shape="default" variant="warning">
                  Warning badge
                </Badge>
              </div>
            </PatternBoxRow>
          </PatternBox>
        </PageSection>

        <PageSection>
          <SectionTitle>Size</SectionTitle>

          <PatternBox>
            <PatternBoxRow>
              {(variant = 'primary') && undefined}
              <div>
                <Badge size="default" variant={variant}>
                  Default badge
                </Badge>
              </div>
              <div>
                <Badge size="lg" variant={variant}>
                  Large badge
                </Badge>
              </div>
            </PatternBoxRow>
          </PatternBox>
        </PageSection>

        <PageSection>
          <SectionTitle>Weight</SectionTitle>

          <PatternBox>
            <PatternBoxRow>
              {(variant = 'primary') && undefined}
              <div>
                <Badge weight="default" variant={variant}>
                  Default badge
                </Badge>
              </div>
              <div>
                <Badge weight="thin" variant={variant}>
                  Thin badge
                </Badge>
              </div>
            </PatternBoxRow>
          </PatternBox>
        </PageSection>

        <PageSection>
          <SectionTitle>Shape</SectionTitle>

          <PatternBox>
            {(size = 'default') && undefined}
            {(variant = 'positive') && undefined}
            {(shape = 'rounded') && undefined}
            {(weight = 'thin') && undefined}
            <PatternBoxRow>
              <div>
                <Badge size={size} variant={variant} shape={shape} weight={weight}>
                  <p className="mx-2">Default rounded badge</p>
                </Badge>
              </div>
              <div>
                <Badge
                  size={size}
                  variant={variant}
                  shape={shape}
                  weight={weight}
                  iconOnly={MoonIcon}
                />
              </div>
              <div>
                <Badge
                  size={size}
                  variant={variant}
                  shape={shape}
                  weight={weight}
                  iconOnly={MicrophoneIcon}
                />
              </div>
              <div>
                <Badge size={size} variant={variant} shape={shape} weight={weight}>
                  10
                </Badge>
              </div>
              <div>
                <Badge size={size} variant={variant} shape={shape} weight={weight}>
                  100
                </Badge>
              </div>
              <div>
                <Badge size={size} variant={variant} shape={shape} weight={weight}>
                  100000
                </Badge>
              </div>
              <div>
                <Badge size={size} variant={variant} shape={shape} weight={weight}>
                  +99
                </Badge>
              </div>
            </PatternBoxRow>

            {(size = 'lg') && undefined}
            <PatternBoxRow>
              <div>
                <Badge size={size} variant={variant} shape={shape} weight={weight}>
                  <p className="mx-2">Large rounded badge</p>
                </Badge>
              </div>
              <div>
                <Badge
                  size={size}
                  variant={variant}
                  shape={shape}
                  weight={weight}
                  iconOnly={MoonIcon}
                />
              </div>
              <div>
                <Badge
                  size={size}
                  variant={variant}
                  shape={shape}
                  weight={weight}
                  iconOnly={MicrophoneIcon}
                />
              </div>
              <div>
                <Badge size={size} variant={variant} shape={shape} weight={weight}>
                  10
                </Badge>
              </div>
              <div>
                <Badge size={size} variant={variant} shape={shape} weight={weight}>
                  100
                </Badge>
              </div>
              <div>
                <Badge size={size} variant={variant} shape={shape} weight={weight}>
                  100000
                </Badge>
              </div>
              <div>
                <Badge size={size} variant={variant} shape={shape} weight={weight}>
                  +99
                </Badge>
              </div>
            </PatternBoxRow>
          </PatternBox>
        </PageSection>

        <PageSection>
          <SectionTitle>With Icon (before, after, & both)</SectionTitle>

          <PatternBox>
            {(size = 'default') && undefined}
            {(variant = 'warning') && undefined}
            {(shape = 'default') && undefined}
            {(weight = 'default') && undefined}
            <PatternBoxRow>
              <div>
                <Badge size={size} variant={variant} shape={shape} iconBefore={ClockIcon}>
                  10 minutes left
                </Badge>
              </div>
              <div>
                <Badge size={size} variant={variant} shape={shape} iconAfter={ArrowNarrowRightIcon}>
                  10 minutes left
                </Badge>
              </div>
              <div>
                <Badge
                  size={size}
                  variant={variant}
                  shape={shape}
                  iconBefore={ClockIcon}
                  iconAfter={ArrowNarrowRightIcon}
                >
                  10 minutes left
                </Badge>
              </div>
            </PatternBoxRow>
          </PatternBox>
        </PageSection>
      </div>
    </>
  )
}

export default BadgePage
