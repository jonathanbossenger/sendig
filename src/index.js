import { registerBlockExtension } from '@10up/block-components';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { BlockControls } from '@wordpress/block-editor';
import { pullLeft, pullRight } from '@wordpress/icons';

/**
 * BlockEdit
 *
 * A React component that will get mounted in the editor when the block
 * is selected. It is recommended to use Slots like `BlockControls` or
 * `InspectorControls` in here to put settings into the blocks
 * toolbar or sidebar.
 *
 * @param {object} props block props
 * @returns {WPElement}
 */
function BlockEdit( { attributes, setAttributes } ) {

	/**
	 * todo - could left/rightIsPressed be combined into one attribute?
	 */

	function handleFlipDirectionLeft() {
		setAttributes(
			{
				hasFlipDirection: 'left',
				leftIsPressed: true,
				rightIsPressed: false,
			}
		);

	}

	function handleFlipDirectionRight() {
		setAttributes(
			{
				hasFlipDirection: 'right',
				rightIsPressed: true,
				leftIsPressed: false,
			}
		);
	}

	return (
		<BlockControls>
			<ToolbarGroup>
				<ToolbarButton isPressed={ attributes.leftIsPressed }
					icon={ pullLeft }
					label="Align Left"
					onClick={ handleFlipDirectionLeft }
				/>
				<ToolbarButton isPressed={ attributes.rightIsPressed }
					icon={ pullRight }
					label="Align Right"
					onClick={ handleFlipDirectionRight }
				/>
			</ToolbarGroup>
		</BlockControls>
	);
}

function generateClassNames(attributes) {
	return 'has-flip-direction-' + attributes.hasFlipDirection;
}

registerBlockExtension(
	'core/separator',
	{
		extensionName: 'sendig-separator',
		attributes: {
			hasFlipDirection: {
				type: 'string',
				default: 'right',
			},
			leftIsPressed: {
				type: 'boolean',
				default: false,
			},
			rightIsPressed: {
				type: 'boolean',
				default: true,
			}
		},
		classNameGenerator: generateClassNames,
		Edit: BlockEdit,
	}
);