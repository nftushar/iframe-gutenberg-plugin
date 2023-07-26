import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import {
	PanelBody, TabPanel, TextControl, ToggleControl, SelectControl, __experimentalUnitControl as UnitControl,
} from "@wordpress/components";
import { BorderControl } from "../../Components"


const Settings = ({ attributes, setAttributes }) => {
	const { src, title, height, width, loading, border, isFullScreen } = attributes;


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
									<TextControl
										label={__("title", "iframe")}
										value={title}
										onChange={(val) => setAttributes({ title: val })}
									/>

									{/* ... other controls ... */}
									<SelectControl
										label="Loading Behavior"
										value={loading}
										options={[
											{ label: 'Auto', value: 'auto' },
											{ label: 'Lazy', value: 'lazy' },
											{ label: 'Eager', value: 'eager' },
										]}
										onChange={(val) => setAttributes({ loading: val })}
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

									<BorderControl
										label={__('Border:', 'iframe')}
										value={border}
										onChange={val => setAttributes({ border: val })}
										defaults={{ radius: '5px' }}
									/>

									{/* <UnitControl
										className="mt20"
										label={__("Border Radious", "iframe")}
										labelPosition="left"
										value={ifmRadius}
										onChange={(val) => setAttributes({ ifmRadius: val })} /> */}
									<ToggleControl
										label={__("Show Full Screen", "iframe")}
										checked={isFullScreen}
										onChange={(val) => setAttributes({ isFullScreen: val })}
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
