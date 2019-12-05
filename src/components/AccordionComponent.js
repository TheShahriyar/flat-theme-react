import React from "react"
import "react-accessible-accordion/dist/fancy-example.css"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion"

const AccordionComponent = () => {
  return (
    <>
      <Accordion className="faq" allowZeroExpanded="true">
        <AccordionItem className="single-item">
          <AccordionItemHeading>
            <AccordionItemButton>
              Low Cost Advertising Available or Not?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et malesu
              ada fames and reply to all.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="single-item">
          <AccordionItemHeading>
            <AccordionItemButton>
              What Is The Big R For Marketing Your Business?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et malesu
              ada fames and reply to all.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="single-item">
          <AccordionItemHeading>
            <AccordionItemButton>
              Does Using Banner Stands Increase Trade Show Traffic?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et malesu
              ada fames and reply to all.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="single-item">
          <AccordionItemHeading>
            <AccordionItemButton>
              How To Write Better Advertising Copy?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et malesu
              ada fames and reply to all.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </>
  )
}

export default AccordionComponent
