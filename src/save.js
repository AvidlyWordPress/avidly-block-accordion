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
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save( props ) {
	return (
		<div { ...useBlockProps.save() }>
			<button type="button" aria-expanded="false" class="wp-block-avidly-accordion__trigger" aria-controls={ `sect-${ props.attributes.blockId }` } id={ `accordion-${ props.attributes.blockId }` }>
				<span>{ props.attributes.content }</span>
			</button>
			<div id={ `sect-${ props.attributes.blockId }` } role="region" aria-labelledby={ `accordion-${ props.attributes.blockId }` } className='wp-block-avidly-accordion__panel' hidden="">
				<div className='wp-block-avidly-accordion__content'>
					<InnerBlocks.Content />
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
	<div id={ `sect-${ props.attributes.blockId }` } role="region" aria-labelledby={ `accordion-${ props.attributes.blockId }` } className='wp-block-avidly-accordion__panel' hidden="">
		<div className='wp-block-avidly-accordion__content'>
			<InnerBlocks.Content />
		</div>
	</div>
</div>
*/