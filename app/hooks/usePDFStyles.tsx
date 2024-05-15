import { StyleSheet } from "@react-pdf/renderer"
import { useHeight, useWidth } from "."

const usePDFStyles = () => {

const [ height ] = useHeight()
const [ width ] = useWidth()

const quotes = StyleSheet.create ({
      page: {
        backgroundColor: "#ffffff",
        color: "#000000",
      },

        section: {
          margin: 10,
          padding: 10,
        },

        viewer: {
        width: width,
        height: height,
        },    
})

  return {quotes}
}

export default usePDFStyles