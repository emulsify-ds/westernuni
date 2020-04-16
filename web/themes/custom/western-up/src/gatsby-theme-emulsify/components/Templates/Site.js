import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
/** @jsx jsx */
import { Flex, jsx, useColorMode } from "theme-ui";

import Sidebar from "gatsby-theme-emulsify/src/components/Organisms/Sidebar/Sidebar.component";
import Tabs from "gatsby-theme-emulsify/src/components/Organisms/Tabs/Tabs.component";

import "gatsby-theme-emulsify/src/components/Templates/site.css";
import "gatsby-theme-emulsify/src/components/Templates/main.css";

export default ({
  title,
  pageTitle,
  body,
  docPages,
  designSystems,
  id,
  menu,
  parentDirectory,
  collection
}) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [colorMode, setColorMode] = useColorMode();

  const toggleOpen = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  let tabs = docPages
    .filter(
      docPage =>
        docPage.node.fields &&
        docPage.node.fields.parentDir === parentDirectory &&
        docPage.node.frontmatter.tab
    )
    .sort(function(a, b) {
      return a.node.frontmatter.tabOrder - b.node.frontmatter.tabOrder;
    });
  return (
    <div className={isMenuOpen ? "wrapper-open wrapper" : "wrapper"}>
      <Flex className="main">
        <Sidebar
          id={id}
          pages={docPages}
          siteTitle={title}
          toggleOpen={toggleOpen}
          menu={menu}
          collection={collection}
          designSystems={designSystems}
        />
        <Flex
          className="main-content"
          sx={{
            flexBasis: [null, "80%", null],
            ".tabs": {
              backgroundColor: "highlight"
            },
            ".tabs a:hover": {
              color: "highlight"
            },
            ".active": {
              backgroundColor: "background",
              color: "highlight"
            }
          }}
        >
          <button
            onClick={e => {
              setColorMode(colorMode === "default" ? "dark" : "default");
            }}
            sx={{
              cursor: "pointer",
              color: colorMode === "dark" ? "text" : "background",
              display: "block",
              fontWeight: 700,
              position: "fixed",
              top: 4,
              right: 4,
              backgroundColor: colorMode === "dark" ? "background" : "primary",
              border: "none",
              borderRadius: "2px",
              py: 2,
              px: 3,
              fontSize: 1,
              zIndex: 10,
              "&:hover": {
                backgroundColor: "background",
                color: "primary"
              }
            }}
          >
            {colorMode === "default" ? "Dark" : "Light"}
          </button>
          <h1
            className="main-title"
            sx={{
              background: theme =>
                `linear-gradient(90deg, ${theme.colors.primary} 20px, transparent 1%) center, linear-gradient(${theme.colors.primary} 20px, transparent 1%) center, ${theme.colors.muted}`,
              backgroundSize: "22px 22px",
              color: colorMode === "dark" ? "text" : "background",
              fontSize: "4rem",
              lineHeight: "1.2",
              mb: 0,
              marginTop: 0,
              px: [4, null, 16],
              py: [8, null, 64],
              pb: [8, null, 16]
            }}
          >
            {pageTitle}
          </h1>
          {tabs.length ? <Tabs tabs={tabs} id={id} /> : null}
          <div
            className="main-content-content"
            sx={{
              px: [4, null, 16],
              py: 12,
              "& h1": {
                fontSize: 8
              },
              "img": {
                mb: 6
              },
              "iframe": {
                borderColor: "muted",
                padding: 4,
              },
              "table, td, tr, thead, th": {
                border: "none",
                verticalAlign: "top"
              },
              "th": {
                textAlign: "center"
              }
            }}
          >
            <MDXRenderer>{body}</MDXRenderer>
          </div>
        </Flex>
      </Flex>
    </div>
  );
};
