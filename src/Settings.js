import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import { outlineIcon, solidIcon } from './utils/icons';
// import produce from "immer";
import { PanelBody, TabPanel, TextControl, SelectControl, } from "@wordpress/components";

import { BtnGroup } from "../../Components"
import { RangeControl } from "@wordpress/components";

const iconOptions = [
	{ label: __('Outline', 'rating'), value: 'outlineIcon', icon: outlineIcon },
	{ label: __('Solid', 'rating'), value: 'solidIcon', icon: solidIcon }
];
const alignments = [
	{ label: __('left', 'rating'), value: 'left', icon: "" },
	{ label: __('Option 1', 'rating'), value: 'option1', icon: "" }
];


const Settings = ({ attributes, setAttributes }) => {
	const { ratingScale, rating, iconStyle, prefix, alignment } = attributes;

	return (
		<>
			<InspectorControls>
				<TabPanel
					className="bPlTabPanel"
					tabs={[
						{ name: "general", title: __("General") },
						{ name: "style", title: __("Style") },
					]}
				>
					{(tab) => (
						<>
							{tab.name === "general" && (
								<PanelBody
									className="bPlPanelBody"
									title={__("Manage Star-rating", "Star-rating")}
								>
									<SelectControl
										label="Rating Scale"
										value={ratingScale}
										options={[
											{ label: '0-5', value: 5 },
											{ label: '0-10', value: 10 },
										]}
										onChange={(val) => setAttributes({ ratingScale: val })}
									/>
									<RangeControl
										className="mt20"
										label={__("Rating", "Star-rating")}
										labelPosition="left"
										value={rating}
										onChange={(val) => setAttributes({ rating: val })}
									/>
									<BtnGroup
										className="mt20"
										label={__("Icon Style", "Star-rating")}
										labelPosition="left"
										value={iconStyle}
										onChange={val => setAttributes({ iconStyle: val })}
										options={iconOptions}
										isIcon={true}
									/>
									<BtnGroup
										className="mt20"
										label={__("Alignments", "Star-rating")}
										labelPosition="left"
										value={alignment}
										onChange={val => setAttributes({ alignment: val })}
										options={alignments}
										isIcon={true}
									/>
									<TextControl
										label={__("title", "Star-rating")}
										value={prefix}
										onChange={(val) => setAttributes({ prefix: val })}
									/>

								</PanelBody>
							)}

							{tab.name === "style" && (
								<PanelBody
									className="bPlPanelBody"
									title={__("Manage Star-rating", "Star-rating")}
								>
								</PanelBody>
							)}
						</>
					)}

				</TabPanel>
			</InspectorControls>
		</>
	);
};

export default Settings;
