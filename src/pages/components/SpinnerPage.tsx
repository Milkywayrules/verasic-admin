import PageSection from 'src/components/atoms/PageSection'
import PatternBox from 'src/components/atoms/PatternBox'
import PatternBoxRow from 'src/components/atoms/PatternBoxRow'
import SectionTitle from 'src/components/atoms/SectionTitle'
import Spinner, { SpinnerSize, SpinnerVariant } from 'src/components/atoms/Spinner'
import Badge from 'src/components/molecules/Badge'

const SpinnerPage = () => {
  const variants: SpinnerVariant[] = ['default', 'semidark', 'primary', 'light']

  const sizes: SpinnerSize[] = ['xs', 'sm', 'default', 'lg', 'xl', '2xl']
  const sizesCustom: SpinnerSize[] = ['|-010px', '|-050px', '|-110px', '|-160px']

  return (
    <>
      <div className="flex flex-col gap-10">
        <PageSection>
          <SectionTitle>Variant</SectionTitle>

          <PatternBox>
            <PatternBoxRow>
              {variants.map(variant => (
                <div className="flex flex-col items-center justify-end gap-3">
                  {variant === 'light' ? (
                    <div className="rounded bg-gray-800 p-2">
                      <Spinner variant={variant} />
                    </div>
                  ) : (
                    <div className="rounded p-2">
                      <Spinner variant={variant} />
                    </div>
                  )}
                  <Badge variant="primary-inverted">{variant.replace('|-', '')}</Badge>
                </div>
              ))}
            </PatternBoxRow>
          </PatternBox>
        </PageSection>

        <PageSection>
          <SectionTitle>Size</SectionTitle>

          <PatternBox>
            <PatternBoxRow>
              {sizes.map(size => (
                <div className="flex flex-col items-center justify-end gap-3">
                  <Spinner size={size} />
                  <Badge variant="primary-inverted">{size.replace('|-', '')}</Badge>
                </div>
              ))}
            </PatternBoxRow>

            <PatternBoxRow>
              {sizesCustom.map(size => (
                <div className="flex flex-col items-center justify-end gap-3">
                  <Spinner size={size} />
                  <Badge variant="primary-inverted">Custom: {size.replace('|-', '')}</Badge>
                </div>
              ))}
            </PatternBoxRow>
          </PatternBox>
        </PageSection>
      </div>
    </>
  )
}

export default SpinnerPage
