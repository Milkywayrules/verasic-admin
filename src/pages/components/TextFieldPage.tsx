import PageSection from 'src/components/atoms/PageSection'
import PatternBox from 'src/components/atoms/PatternBox'
import PatternBoxRow from 'src/components/atoms/PatternBoxRow'
import SectionTitle from 'src/components/atoms/SectionTitle'
import TextField from 'src/components/atoms/TextField'
import { useTitle } from 'src/hooks/useTitle'

const TextFieldPage = () => {
  useTitle('Text Field')

  return (
    <>
      <div className="flex flex-col gap-10">
        {/* default */}
        <PageSection>
          <SectionTitle>Default</SectionTitle>
          <PatternBox>
            <PatternBoxRow>
              <div>
                <TextField
                  type="text"
                  placeholder="Default Text Field"
                  title="Default Text Field"
                  width="250"
                />
              </div>
            </PatternBoxRow>
          </PatternBox>
        </PageSection>

        {/* width */}
        <PageSection>
          <SectionTitle>Width</SectionTitle>

          <PatternBox>
            <PatternBoxRow>
              <div>
                <TextField width="75" placeholder="75px" title="75px" />
              </div>
            </PatternBoxRow>
            <PatternBoxRow>
              <div>
                <TextField width="150" placeholder="150px" title="150px" />
              </div>
            </PatternBoxRow>
            <PatternBoxRow>
              <div>
                <TextField width="250" placeholder="250px" title="250px" />
              </div>
            </PatternBoxRow>
            <PatternBoxRow>
              <div>
                <TextField width="350" placeholder="350px" title="350px" />
              </div>
            </PatternBoxRow>
            <PatternBoxRow>
              <div>
                <TextField width="500" placeholder="500px" title="500px" />
              </div>
            </PatternBoxRow>
          </PatternBox>
        </PageSection>

        {/* sizing */}
        <PageSection>
          <SectionTitle>Sizing</SectionTitle>

          <PatternBox>
            <PatternBoxRow>
              <div>
                <TextField
                  sizing="compact"
                  placeholder="Compact"
                  width="150"
                  minLength={3}
                  maxLength={100}
                />
              </div>
            </PatternBoxRow>
            <PatternBoxRow>
              <div>
                <TextField
                  sizing="default"
                  placeholder="Default"
                  width="250"
                  minLength={3}
                  maxLength={100}
                />
              </div>
            </PatternBoxRow>
            <PatternBoxRow>
              <div>
                <TextField
                  sizing="fat"
                  placeholder="Fat"
                  width="350"
                  minLength={3}
                  maxLength={100}
                />
              </div>
            </PatternBoxRow>
          </PatternBox>
        </PageSection>
      </div>
    </>
  )
}

export default TextFieldPage
