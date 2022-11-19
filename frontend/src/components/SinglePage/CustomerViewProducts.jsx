import { Box, Flex } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../store/product/product.action';
import ProductDetails from '../Skin/ProductDetails';

const CustomerViewProducts = () => {
	const dispatch = useDispatch();

	const p1 =  {"_id":"636b338b60f063e1adc91ac3","card_title":"Philips Hair Dryer (HP8120/00)","title":"Philips Hair Dryer (HP8120/00)","rating":4.4,"reviews":10,"price":1345,"off_price":967,"offer":28,"image1":"https://images-static.nykaa.com/media/catalog/product/b/d/bdd7491nyphilips0009as__1_.jpg?tr=w-344,h-344,cm-pad_resize","image2":"https://images-static.nykaa.com/media/catalog/product/b/d/bdd7491nyphilips0009as__2_.jpg?tr=w-344,h-344,cm-pad_resize","image3":"https://images-static.nykaa.com/media/catalog/product/b/d/bdd7491nyphilips0009as__4_.jpg?tr=w-344,h-344,cm-pad_resize","brand":"Philips India","category":"Hair_Styling_Tools","sub_category":"Hair_Dryers","description":"Philips HP8120/00 EssentialCare Hair Dryer is cute, compact and powerful. 1200W power enables you to dry hair gently and quickly. Flexible caring settings are designed to meet different drying needs and offer extra care.","how_to_use":"ThermoProtect temperature setting: Provides the optimal drying temperature while giving additional protection. The ThermoProtect optimal airflow and heat combination allows you to quickly dry your hair without overheating, maintaining your hair's natural moisture level, for shiny healthy looking hair.","id":3,"quan":1}

	const p2 = {"_id":"636b338b60f063e1adc91ac9","card_title":"CARRERA 421 Professional Rechargeable Wireless...","title":"CARRERA 421 Professional Rechargeable Wireless Electric Shaver and Precision Trimmer (Unisex)","rating":5,"reviews":1,"price":69,"off_price":4790,"offer":1,"image1":"https://images-static.nykaa.com/media/catalog/product/d/b/db72c458903558284545__1_.jpg?tr=w-344,h-344,cm-pad_resize","image2":"https://images-static.nykaa.com/media/catalog/product/d/b/db72c458903558284545__2_.jpg?tr=w-344,h-344,cm-pad_resize","image3":"https://images-static.nykaa.com/media/catalog/product/d/b/db72c458903558284545__4_.jpg?tr=w-344,h-344,cm-pad_resize","brand":"CARRERA","category":"Shaving_Tools","sub_category":"Shavers","description":"CARRERA 421 Professional Rechargeable Wireless Electric Shaver is smaller version of Shaver No. 521, but don't be fooled. The two precision shaving foils show stubble no mercy, while the integrated trimmer catches longer hairs too. Pre-shave? Done. Skin? Smooth.","how_to_use":"Set the trimmer according to the desired length and run over your stubble/beard. Detach the head and rinse it under the tap for easy cleaning. Dry it before you put it back on the appliance.","id":9,"quan":1}

	const p3 = {"_id":"636b338b60f063e1adc91ad7","card_title":"Veet Sensitive Touch Electric Trimmer Expert","title":"Veet Sensitive Touch Electric Trimmer Expert","rating":4,"reviews":814,"price":2500,"off_price":1650,"offer":7,"image1":"https://images-static.nykaa.com/media/catalog/product/8/9/8901396322955_new_1_.jpg?tr=w-344,h-344,cm-pad_resize","image2":"https://images-static.nykaa.com/media/catalog/product/8/9/8901396322955_new_4_.jpg?tr=w-344,h-344,cm-pad_resize","image3":"https://images-static.nykaa.com/media/catalog/product/8/9/8901396322955_new_8_.jpg?tr=w-344,h-344,cm-pad_resize","brand":"Veet","category":"Hair_Removal_Tools","sub_category":"Bikini_Trimmers","description":"Clean the blades with the supplied brush. Both the bikini and face heads can be rinsed in water and then wiped dry. Remember not to rinse the main body under water. The battery is not re-chargeable. Once exhausted, we recommend you replace the battery with an Alkaline AA battery. ","how_to_use":"Attach desired trimmer head by inserting into top of body of device and twisting clockwise.  For perfect looking eyebrows:  Trim, for desired eyebrow length just trim them! Use the small head and add the comb, Place the device over your eyebrow and move it against the direction of hair growth. For gently shaved/shaped Bikini For Shaving/shaping:  Use the large head. Touch Skin lightly and move the device in the opposite direction of hair growth. As its cutting blades, don't touch the skin, there is No fear of cuts. For gentle hair removal from upper lips and chin:  For smaller areas of upper lips you can use the high precision head and move it in opposite direction of hair growth. For chin use the larger head - touch skin lightly and move the device in the opposite direction of hair growth. For Trimming: Add the comb and choose the desired length. For perfect looking sideburns:  Step 1: Trim. For desired sideburn length just trim them. Use the small head and the comb. Place the device over your sideburn and move it against the direction of hair growth. Step 2: Shape. For a perfect sideburn shaping remove the comb and use the high precision head. Touch the skin lightly and move the device around the sideburn.","id":22,"quan":1,
	}

	// useEffect(()=>{
	// 	dispatch(getProduct());
	// }, []);

	return (
		<Box>
			<Flex p={'20px 0px 20px 0px'} gap={6} width="100%">
				<ProductDetails product={p1}/>
				<ProductDetails product={p2} />
				<ProductDetails product={p3} />
			</Flex>
		</Box>
	)
}

export default CustomerViewProducts;