import { useEffect } from "react"

const isBrowser = !!(typeof window !== "undefined" && window.document && window.document.createElement)

/** change NProgress bar & spinner Color */
export default function useNProgressColor(color: string) {
  useEffect(() => {
    if (!color) return
    if (!isBrowser) return
    const content = document.createTextNode(`
        #nprogress .bar {
            background-color: ${color} !important;
        }
        #nprogress .spinner-icon {
            border-top-color: ${color} !important;
            border-left-color: ${color} !important;
        }
    `)
    const existElement = document.getElementById("nprogress_set_color")
    if (existElement) {
      existElement.replaceChildren(content)
      return
    }
    // add change color style element
    const element = document.createElement("style")
    element.id = "nprogress_set_color"
    element.appendChild(content)
    document.head.insertBefore(element, document.head[0])
  }, [color])
}
