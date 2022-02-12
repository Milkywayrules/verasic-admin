import BorderToggleSLimSidebar from 'src/components/atoms/verticalSidebarV1/BorderToggleSlimSidebar'
import ExtendedSlimSidebarItem from 'src/components/atoms/verticalSidebarV1/ExtendedSlimSidebarItem'
import ExtendedSlimSidebarListChildWrapper from 'src/components/atoms/verticalSidebarV1/ExtendedSlimSidebarListChildWrapper'
import ExtendedSlimSidebarSection from 'src/components/atoms/verticalSidebarV1/ExtendedSlimSidebarSection'
import SlimSidebarItem from 'src/components/atoms/verticalSidebarV1/SlimSidebarItem'
import SlimSidebarSection from 'src/components/atoms/verticalSidebarV1/SlimSidebarSection'
import { capsFirstLetter } from 'src/helpers/textUtils'
import EXT_SLIM_SIDEBAR_DATA from 'src/_data/sidebar_menu/extended_slim_sidebar_data'
import SLIM_SIDEBAR_DATA from 'src/_data/sidebar_menu/slim_sidebar_data'
import ExtendedSlimSidebarListWrapper from './ExtendedSlimSidebarListWrapper'

const SlimSidebar = () => (
  <div className="h-screen bg-blue-800 py-1 text-white">
    <div className="flex h-full w-16 min-w-fit shrink-0 grow-0 flex-col items-center justify-between gap-20 overflow-y-auto py-5 px-2">
      <SlimSidebarSection items={SLIM_SIDEBAR_DATA.topItems}>
        {({ id, title, icon, to, customWrapper }) => (
          <SlimSidebarItem
            id={id}
            key={id}
            to={to}
            title={title}
            icon={icon}
            customWrapper={customWrapper}
          />
        )}
      </SlimSidebarSection>
      <SlimSidebarSection items={SLIM_SIDEBAR_DATA.bottomItems}>
        {({ id, title, icon, to, customWrapper }) => (
          <SlimSidebarItem
            id={id}
            key={id}
            to={to}
            title={title}
            icon={icon}
            customWrapper={customWrapper}
          />
        )}
      </SlimSidebarSection>
    </div>
  </div>
)
const ExtendedSlimSidebar = () => (
  <div className="relative flex h-screen w-60 shrink-0 grow-0 flex-col items-center justify-between bg-gray-100 text-gray-700">
    <div className=" h-full w-full py-1">
      <ExtendedSlimSidebarSection items={EXT_SLIM_SIDEBAR_DATA}>
        {parentItem => {
          return (
            <div key={parentItem.id} className="flex flex-col gap-1">
              <h3 className="ml-3 border-2 border-transparent font-medium">
                {capsFirstLetter(parentItem.title)}
              </h3>

              <ExtendedSlimSidebarListWrapper items={parentItem.listItem}>
                {childItem => {
                  if (childItem.childItems) {
                    return (
                      <ExtendedSlimSidebarItem
                        key={childItem.id}
                        id={childItem.id}
                        to={childItem.to}
                        children={childItem.content}
                        innerChildren={
                          <ExtendedSlimSidebarListChildWrapper
                            id={childItem.id}
                            items={childItem.childItems}
                          >
                            {grandChildItem => (
                              <ExtendedSlimSidebarItem
                                key={grandChildItem.id}
                                id={grandChildItem.id}
                                to={grandChildItem.to}
                                wrapperClass="mx-2"
                              >
                                {grandChildItem.content}
                              </ExtendedSlimSidebarItem>
                            )}
                          </ExtendedSlimSidebarListChildWrapper>
                        }
                      />
                    )
                  }

                  return (
                    <ExtendedSlimSidebarItem key={childItem.id} id={childItem.id} to={childItem.to}>
                      {childItem.content}
                    </ExtendedSlimSidebarItem>
                  )
                }}
              </ExtendedSlimSidebarListWrapper>
            </div>
          )
        }}
      </ExtendedSlimSidebarSection>
    </div>

    <BorderToggleSLimSidebar />
  </div>
)

const VerticalSidebarV1 = () => {
  return (
    <>
      <SlimSidebar />
      <ExtendedSlimSidebar />
    </>
  )
}

export default VerticalSidebarV1
