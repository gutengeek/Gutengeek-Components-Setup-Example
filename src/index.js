import Components from "@gutengeek/components";
import '@gutengeek/components/build/core.css';
import '@gutengeek/components/build/index.css';

const {
  Typography
} = Components

// /* block.js */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { registerBlockType } = wp.blocks;
const { InspectorControls } = wp.blockEditor;
const { TextControl, PanelBody } = wp.components;

registerBlockType("gutengeek-components/example-blocks", {
  title: "Example", // Block name visible to user

  icon: "lightbulb", // Toolbar icon can be either using WP Dashicons or custom SVG

  category: "common", // Under which category the block would appear

  attributes: {
    // The data this block will be storing
    type: { type: "string", default: "default" }, // Notice box type for loading the appropriate CSS class. Default class is 'default'.

    title: { type: "string" },

    typo: { type: "object", default: {} },
  },

  edit: (props) => {
    const {
      attributes: { url, typo },
      setAttributes,
    } = props;
    return (
      <Fragment>
        <InspectorControls>
          <PanelBody title={__("TEST PANEL")} initialOpen={false}>
            <TextControl
              value={url}
              onChange={(value) => setAttributes({ url: value })}
            />
            <Typography
              value={typo}
              onChange={(value) => setAttributes({ typo: value })}
            />
          </PanelBody>
        </InspectorControls>

        <div className="aksdjlaksd">sakdhlkjasdlkajsdkljasldkasd</div>
      </Fragment>
    );
  },

  save: function (props) {
    return null;
  },
});
