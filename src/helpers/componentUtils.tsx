/**
 * Build a new className with active state class
 *
 * @param isActive is Link active or not
 * @param className className
 * @param activeClassName className when the Link is active
 * @returns concated className and activeClassName
 */
function buildActiveClassName(isActive: boolean): string
function buildActiveClassName(isActive: boolean, activeClassName: string): string
function buildActiveClassName(isActive: boolean, className: string, activeClassName: string): string
function buildActiveClassName(
  isActive: boolean,
  className: string = '',
  activeClassName: string = '',
) {
  return `${className} ${isActive ? activeClassName : ''}`
}

export const routerUtils = {
  buildActiveClassName,
}
