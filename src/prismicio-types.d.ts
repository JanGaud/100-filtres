// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from '@prismicio/client';

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Item in *ContactForm → Full Name Input*
 */
export interface ContactformDocumentDataFullNameInputItem {
	/**
	 * Input Title field in *ContactForm → Full Name Input*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: contactform.full_name_input[].input_title
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	input_title: prismic.KeyTextField;

	/**
	 * Input Request field in *ContactForm → Full Name Input*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: contactform.full_name_input[].input_request
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	input_request: prismic.KeyTextField;
}

/**
 * Item in *ContactForm → Email Input*
 */
export interface ContactformDocumentDataEmailInputItem {
	/**
	 * Input Title field in *ContactForm → Email Input*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: contactform.email_input[].input_title
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	input_title: prismic.KeyTextField;

	/**
	 * Input Request field in *ContactForm → Email Input*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: contactform.email_input[].input_request
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	input_request: prismic.KeyTextField;
}

/**
 * Item in *ContactForm → Phone Input*
 */
export interface ContactformDocumentDataPhoneInputItem {
	/**
	 * Input Title field in *ContactForm → Phone Input*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: contactform.phone_input[].input_title
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	input_title: prismic.KeyTextField;

	/**
	 * Input Request field in *ContactForm → Phone Input*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: contactform.phone_input[].input_request
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	input_request: prismic.KeyTextField;
}

/**
 * Item in *ContactForm → Message Input*
 */
export interface ContactformDocumentDataMessageInputItem {
	/**
	 * Input Title field in *ContactForm → Message Input*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: contactform.message_input[].input_title
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	input_title: prismic.KeyTextField;

	/**
	 * Input Request field in *ContactForm → Message Input*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: contactform.message_input[].input_request
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	input_request: prismic.KeyTextField;
}

/**
 * Content for ContactForm documents
 */
interface ContactformDocumentData {
	/**
	 * Title Section 1 field in *ContactForm*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: contactform.title_section_1
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	title_section_1: prismic.KeyTextField;

	/**
	 * Title Section 2 field in *ContactForm*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: contactform.title_section_2
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	title_section_2: prismic.KeyTextField;

	/**
	 * Full Name Input field in *ContactForm*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: contactform.full_name_input[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#group
	 */
	full_name_input: prismic.GroupField<Simplify<ContactformDocumentDataFullNameInputItem>>;

	/**
	 * Email Input field in *ContactForm*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: contactform.email_input[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#group
	 */
	email_input: prismic.GroupField<Simplify<ContactformDocumentDataEmailInputItem>>;

	/**
	 * Phone Input field in *ContactForm*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: contactform.phone_input[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#group
	 */
	phone_input: prismic.GroupField<Simplify<ContactformDocumentDataPhoneInputItem>>;

	/**
	 * Message Input field in *ContactForm*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: contactform.message_input[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#group
	 */
	message_input: prismic.GroupField<Simplify<ContactformDocumentDataMessageInputItem>>;

	/**
	 * Logo field in *ContactForm*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: contactform.logo
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	logo: prismic.ImageField<never>;

	/**
	 * Btn Text 1 field in *ContactForm*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: contactform.btn_text_1
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	btn_text_1: prismic.KeyTextField;

	/**
	 * Btn Text 2 field in *ContactForm*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: contactform.btn_text_2
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	btn_text_2: prismic.KeyTextField;

	/**
	 * Btn Text 3 field in *ContactForm*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: contactform.btn_text_3
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	btn_text_3: prismic.KeyTextField;
}

/**
 * ContactForm document from Prismic
 *
 * - **API ID**: `contactform`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ContactformDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<
	Simplify<ContactformDocumentData>,
	'contactform',
	Lang
>;

/**
 * Item in *menu → Menu Item*
 */
export interface MenuDocumentDataMenuItemItem {
	/**
	 * Item Title field in *menu → Menu Item*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: menu.menu_item[].item_title
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	item_title: prismic.KeyTextField;

	/**
	 * Item Description field in *menu → Menu Item*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: menu.menu_item[].item_description
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	item_description: prismic.KeyTextField;

	/**
	 * Price Table field in *menu → Menu Item*
	 *
	 * - **Field Type**: Table
	 * - **Placeholder**: *None*
	 * - **API ID Path**: menu.menu_item[].price_table
	 * - **Documentation**: https://prismic.io/docs/field#table
	 */
	price_table: prismic.TableField;

	/**
	 * Out of stock field in *menu → Menu Item*
	 *
	 * - **Field Type**: Boolean
	 * - **Placeholder**: *None*
	 * - **Default Value**: false
	 * - **API ID Path**: menu.menu_item[].out_of_stock
	 * - **Documentation**: https://prismic.io/docs/field#boolean
	 */
	out_of_stock: prismic.BooleanField;
}

/**
 * Content for menu documents
 */
interface MenuDocumentData {
	/**
	 * Menu Title field in *menu*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: menu.menu_title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	menu_title: prismic.KeyTextField;

	/**
	 * Menu Image field in *menu*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: menu.menu_image
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	menu_image: prismic.ImageField<never>;

	/**
	 * Menu Item field in *menu*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: menu.menu_item[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#group
	 */
	menu_item: prismic.GroupField<Simplify<MenuDocumentDataMenuItemItem>>;
}

/**
 * menu document from Prismic
 *
 * - **API ID**: `menu`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type MenuDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<
	Simplify<MenuDocumentData>,
	'menu',
	Lang
>;

/**
 * Content for nav documents
 */
interface NavDocumentData {
	/**
	 * Logo state start field in *nav*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: nav.logo_state_start
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	logo_state_start: prismic.ImageField<never>;

	/**
	 * Logo state scroll field in *nav*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: nav.logo_state_scroll
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	logo_state_scroll: prismic.ImageField<never>;

	/**
	 * Link field in *nav*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: nav.link
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	link: prismic.Repeatable<
		prismic.LinkField<string, string, unknown, prismic.FieldState, 'Primary' | 'Secondary'>
	>;
}

/**
 * nav document from Prismic
 *
 * - **API ID**: `nav`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<
	Simplify<NavDocumentData>,
	'nav',
	Lang
>;

type PageDocumentDataSlicesSlice = ContactDetailsSlice | MissionSlice | HomeHeaderSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
	/**
	 * Title field in *Page*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: *None*
	 * - **API ID Path**: page.title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	title: prismic.TitleField;

	/**
	 * Slice Zone field in *Page*
	 *
	 * - **Field Type**: Slice Zone
	 * - **Placeholder**: *None*
	 * - **API ID Path**: page.slices[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#slices
	 */
	slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
	 * Meta Title field in *Page*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A title of the page used for social media and search engines
	 * - **API ID Path**: page.meta_title
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */;
	meta_title: prismic.KeyTextField;

	/**
	 * Meta Description field in *Page*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A brief summary of the page
	 * - **API ID Path**: page.meta_description
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	meta_description: prismic.KeyTextField;

	/**
	 * Meta Image field in *Page*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: page.meta_image
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<
	Simplify<PageDocumentData>,
	'page',
	Lang
>;

/**
 * Item in *settings → Social media*
 */
export interface SettingsDocumentDataSocialMediaItem {
	/**
	 * Social media link field in *settings → Social media*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.social_media[].social_media_link
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	social_media_link: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;

	/**
	 * Icon field in *settings → Social media*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.social_media[].icon
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	icon: prismic.KeyTextField;
}

/**
 * Content for settings documents
 */
interface SettingsDocumentData {
	/**
	 * Company name field in *settings*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.company_name
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	company_name: prismic.KeyTextField;

	/**
	 * Company adress field in *settings*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.company_adress
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	company_adress: prismic.KeyTextField;

	/**
	 * Company phone field in *settings*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.company_phone
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	company_phone: prismic.KeyTextField;

	/**
	 * Company email field in *settings*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.company_email
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	company_email: prismic.KeyTextField;

	/**
	 * Company location field in *settings*
	 *
	 * - **Field Type**: GeoPoint
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.company_location
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#geopoint
	 */
	company_location: prismic.GeoPointField;

	/**
	 * Social media field in *settings*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.social_media[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#group
	 */
	social_media: prismic.GroupField<Simplify<SettingsDocumentDataSocialMediaItem>>;
}

/**
 * settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<
	Simplify<SettingsDocumentData>,
	'settings',
	Lang
>;

export type AllDocumentTypes =
	| ContactformDocument
	| MenuDocument
	| NavDocument
	| PageDocument
	| SettingsDocument;

/**
 * Primary content in *ContactDetails → With Map and Social → Primary*
 */
export interface ContactDetailsSliceWithMapAndSocialPrimary {
	/**
	 * Title field in *ContactDetails → With Map and Social → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: contact_details.with_map_and_social.primary.title
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	title: prismic.KeyTextField;

	/**
	 * Desciption field in *ContactDetails → With Map and Social → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: contact_details.with_map_and_social.primary.desciption
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	desciption: prismic.KeyTextField;
}

/**
 * With Map and Social variation for ContactDetails Slice
 *
 * - **API ID**: `with_map_and_social`
 * - **Description**: Contact layout with address, phone, email, map, and social media links.
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactDetailsSliceWithMapAndSocial = prismic.SharedSliceVariation<
	'with_map_and_social',
	Simplify<ContactDetailsSliceWithMapAndSocialPrimary>,
	never
>;

/**
 * Slice variation for *ContactDetails*
 */
type ContactDetailsSliceVariation = ContactDetailsSliceWithMapAndSocial;

/**
 * ContactDetails Shared Slice
 *
 * - **API ID**: `contact_details`
 * - **Description**: *None*
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactDetailsSlice = prismic.SharedSlice<
	'contact_details',
	ContactDetailsSliceVariation
>;

/**
 * Primary content in *HomeHeader → Default → Primary*
 */
export interface HomeHeaderSliceDefaultPrimary {
	/**
	 * Image field in *HomeHeader → Default → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: home_header.default.primary.image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>;

	/**
	 * Title field in *HomeHeader → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: home_header.default.primary.title
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	title: prismic.KeyTextField;

	/**
	 * SubTitle field in *HomeHeader → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: home_header.default.primary.subtitle
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	subtitle: prismic.KeyTextField;
}

/**
 * Default variation for HomeHeader Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HomeHeaderSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<HomeHeaderSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *HomeHeader*
 */
type HomeHeaderSliceVariation = HomeHeaderSliceDefault;

/**
 * HomeHeader Shared Slice
 *
 * - **API ID**: `home_header`
 * - **Description**: HomeHeader
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HomeHeaderSlice = prismic.SharedSlice<'home_header', HomeHeaderSliceVariation>;

/**
 * Item in *Mission → Default → Primary → Slide*
 */
export interface MissionSliceDefaultPrimarySlideItem {
	/**
	 * Title field in *Mission → Default → Primary → Slide*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: mission.default.primary.slide[].title
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	title: prismic.KeyTextField;

	/**
	 * Description field in *Mission → Default → Primary → Slide*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: mission.default.primary.slide[].description
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	description: prismic.KeyTextField;

	/**
	 * Image field in *Mission → Default → Primary → Slide*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: mission.default.primary.slide[].image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>;
}

/**
 * Primary content in *Mission → Default → Primary*
 */
export interface MissionSliceDefaultPrimary {
	/**
	 * Section Title field in *Mission → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: mission.default.primary.section_title
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	section_title: prismic.KeyTextField;

	/**
	 * Slide field in *Mission → Default → Primary*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: mission.default.primary.slide[]
	 * - **Documentation**: https://prismic.io/docs/field#group
	 */
	slide: prismic.GroupField<Simplify<MissionSliceDefaultPrimarySlideItem>>;
}

/**
 * Default variation for Mission Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MissionSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<MissionSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *Mission*
 */
type MissionSliceVariation = MissionSliceDefault;

/**
 * Mission Shared Slice
 *
 * - **API ID**: `mission`
 * - **Description**: Mission
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MissionSlice = prismic.SharedSlice<'mission', MissionSliceVariation>;

declare module '@prismicio/client' {
	interface CreateClient {
		(
			repositoryNameOrEndpoint: string,
			options?: prismic.ClientConfig
		): prismic.Client<AllDocumentTypes>;
	}

	interface CreateWriteClient {
		(
			repositoryNameOrEndpoint: string,
			options: prismic.WriteClientConfig
		): prismic.WriteClient<AllDocumentTypes>;
	}

	interface CreateMigration {
		(): prismic.Migration<AllDocumentTypes>;
	}

	namespace Content {
		export type {
			ContactformDocument,
			ContactformDocumentData,
			ContactformDocumentDataFullNameInputItem,
			ContactformDocumentDataEmailInputItem,
			ContactformDocumentDataPhoneInputItem,
			ContactformDocumentDataMessageInputItem,
			MenuDocument,
			MenuDocumentData,
			MenuDocumentDataMenuItemItem,
			NavDocument,
			NavDocumentData,
			PageDocument,
			PageDocumentData,
			PageDocumentDataSlicesSlice,
			SettingsDocument,
			SettingsDocumentData,
			SettingsDocumentDataSocialMediaItem,
			AllDocumentTypes,
			ContactDetailsSlice,
			ContactDetailsSliceWithMapAndSocialPrimary,
			ContactDetailsSliceVariation,
			ContactDetailsSliceWithMapAndSocial,
			HomeHeaderSlice,
			HomeHeaderSliceDefaultPrimary,
			HomeHeaderSliceVariation,
			HomeHeaderSliceDefault,
			MissionSlice,
			MissionSliceDefaultPrimarySlideItem,
			MissionSliceDefaultPrimary,
			MissionSliceVariation,
			MissionSliceDefault
		};
	}
}
