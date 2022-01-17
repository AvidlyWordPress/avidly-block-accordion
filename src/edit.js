/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
 import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, PlainText, InnerBlocks } from '@wordpress/block-editor';
 
 
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
 
/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( props ) {
	const {
		attributes: { blockId, content },
		setAttributes,
		clientId
	} = props;
 
	// Set unique block ID.
	{ blockId === null &&
		setAttributes({ blockId: clientId });
	}
 
	// Change content.
	const onChangeContent = ( newContent ) => {
		setAttributes( { content: newContent } );
	};
 
	return (
		<div { ...useBlockProps() }>
			<button type="button" aria-expanded="true" class="wp-block-avidly-accordion__trigger">
				<PlainText
					tagName='span'
					value={ content }
					onChange={ onChangeContent }
					placeholder={ __( 'Add accordion title', 'avidly-block-accordion' ) }
				/>
			</button>
			<div className='wp-block-avidly-accordion__panel'>
				<div className='wp-block-avidly-accordion__content'>
					<InnerBlocks />
				</div>
			</div>
		</div>
	);
}


/*
<div { ...useBlockProps.save() }>
	<div className='wp-block-avidly-accordion__title'>
		<button type="button" aria-expanded="false" class="wp-block-avidly-accordion__trigger" aria-controls={ `sect-${ props.attributes.blockId }` } id={ `accordion-${ props.attributes.blockId }` }>
			<span>{ props.attributes.content }</span>
		</button>
	</div>
	<div id={ `sect-${ props.attributes.blockId }` } role="region" aria-labelledby={ `accordion-${ props.attributes.blockId }` } className='wp-block-avidly-accordion__panel' >
		<div className='wp-block-avidly-accordion__content'>
			<InnerBlocks.Content />
		</div>
	</div>
</div>
*/