import PageSection from 'src/components/atoms/PageSection'
import PatternBox from 'src/components/atoms/PatternBox'
import PatternBoxRow from 'src/components/atoms/PatternBoxRow'
import SectionTitle from 'src/components/atoms/SectionTitle'

const __Example = () => {
  return (
    <>
      <div className="flex flex-col gap-10">
        <PageSection>
          <SectionTitle>Example_1</SectionTitle>

          <PatternBox>
            <PatternBoxRow>
              <div>content_goes_here</div>
            </PatternBoxRow>
          </PatternBox>
        </PageSection>
      </div>
    </>
  )
}

export default __Example
