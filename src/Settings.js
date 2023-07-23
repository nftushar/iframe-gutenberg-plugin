// Make sure to import useState and useEffect from 'react'
// import { useState } from "react";
import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import {
	PanelBody,
	TabPanel,
	TextControl,
	__experimentalUnitControl as UnitControl,
} from "@wordpress/components";

const Settings = ({ attributes, setAttributes }) => {
	const { src, height, width } = attributes;

	return (
		<>
			<InspectorControls>
				<TabPanel
					className="bPlTabPanel"
					tabs={[
						{ name: "general", title: __("General") },
						// { name: "style", title: __("Style") },
					]}
				>
					{(tab) => (
						<>
							{tab.name === "general" && (
								<PanelBody
									className="bPlPanelBody"
									title={__("Manage Iframe", "iframe")}
								>
									<TextControl
										label={__("Source", "iframe")}
										value={src}
										onChange={(val) => setAttributes({ src: val })}
									/>

									<UnitControl
										className="mt20"
										label={__("Height", "iframe")}
										labelPosition="left"
										value={height}
										onChange={(val) => setAttributes({ height: val })}
									/>
									<UnitControl
										className="mt20"
										label={__("Width", "iframe")}
										labelPosition="left"
										value={width}
										onChange={(val) => setAttributes({ width: val })}
									/>
								</PanelBody>
							)}
							{/* Add other panels here for additional tabs */}
						</>
					)}
				</TabPanel>
			</InspectorControls>
		</>
	);
};

export default Settings;
