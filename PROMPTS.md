# Nano Banana Image Generator - Prompts

This file lists all the available prompt categories and their corresponding templates as defined in `src/categories.js`.

---

## Photorealism & Aesthetics
*High-fidelity prompts for complex lighting, textures, and specific eras.*

### Hyper-Realistic Crowd
**Template:**
> Create a hyper-realistic, ultra-sharp, full-color large-format image featuring a massive group of [subject] standing together in a single wide cinematic frame. The image must look like a perfectly photographed editorial cover with impeccable lighting, lifelike skin texture, micro-details of hair, pores, reflections, and fabric fibers.
>
> GENERAL STYLE & MOOD: Photorealistic, 8k, shallow depth of field, soft natural fill light + strong golden rim light. High dynamic range, calibrated color grading. Skin tones perfectly accurate. Crisp fabric detail with individual threads visible. Balanced composition, slightly wide-angle lens (35mm), center-weighted. All subjects interacting naturally, smiling, posing, or conversing. Minimal background noise, but with enough world-building to feel real.
>
> THE ENVIRONMENT: [environment]. Elements include: Warm golden light wrapping around silhouettes. Polished marble.

**Inputs:**
- subject (Subject Group): celebrities from different eras
- environment (Environment): A luxurious open-air rooftop terrace at sunset overlooking a modern city skyline

### 2000s Mirror Selfie
**Template:**
> Create a 2000s Mirror Selfie of yourself using Gemini Nano Banana.
>
> {
>   "subject": {
>     "description": "[description]",
>     "age": "[age]",
>     "expression": "[expression]",
>     "hair": {
>       "color": "[hair_color]",
>       "style": "[hair_style]"
>     },
>     "clothing": {
>       "top": {
>         "type": "[top_type]",
>         "color": "[top_color]",
>         "details": "[top_details]"
>       }
>     },
>     "face": {
>       "preserve_original": true,
>       "makeup": "[makeup]"
>     }
>   },
>   "accessories": {
>     "earrings": {
>       "type": "[earrings]"
>     },
>     "jewelry": {
>       "waistchain": "[waistchain]"
>     },
>     "device": {
>       "type": "smartphone",
>       "details": "patterned case"
>     }
>   },
>   "photography": {
>     "camera_style": "early-2000s digital camera aesthetic",
>     "lighting": "harsh super-flash with bright blown-out highlights but subject still visible",
>     "angle": "mirror selfie",
>     "shot_type": "tight selfie composition",
>     "texture": "subtle grain, retro highlights, V6 realism, crisp details, soft shadows"
>   },
>   "background": {
>     "setting": "[setting]",
>     "wall_color": "[wall_color]",
>     "elements": [
>       "chunky wooden dresser",
>       "CD player",
>       "posters of 2000s pop icons",
>       "hanging beaded door curtain",
>       "cluttered vanity with lip glosses"
>     ],
>     "atmosphere": "authentic 2000s nostalgic vibe",
>     "lighting": "retro"
>   }
> }

**Inputs:**
- description (Description): A young woman taking a mirror selfie...
- age (Age): young adult
- expression (Expression): confident and slightly playful
- hair_color (Hair Color): dark
- hair_style (Hair Style): very long, voluminous waves...
- top_type (Top Type): fitted cropped t-shirt
- top_color (Top Color): cream white
- top_details (Top Details): features a large cute anime-style cat...
- makeup (Makeup): natural glam makeup...
- earrings (Earrings): gold geometric hoop earrings
- waistchain (Waistchain): silver waistchain
- setting (Setting): nostalgic early-2000s bedroom
- wall_color (Wall Color): pastel tones

### Victoria's Secret Style
**Template:**
> Create a glamorous photoshoot in the style of Victoria's Secret. [subject_description] stands almost sideways, slightly bent forward, during the final preparation for the show. Makeup artists apply lipstick to her (only her hands are visible in the frame). She is wearing [outfit], as well as large feather wings. The image has a "backstage" effect.
>
> The background is a darkly lit room, probably under the podium. The main emphasis is on the girl's face and the details of her costume. Emphasize the expressiveness of the gaze and the luxurious look of the outfit. The photo is lit by a flash from the camera, which emphasizes the shine of the beads and crystals on the corset, as well as the girl's shiny skin. Victoria's Secret style: sensuality, luxury, glamour. Very detailed. Important: do not change the face.

**Inputs:**
- subject_description (Subject Description): A young woman attached in the uploaded reference image...
- outfit (Outfit): a corset decorated with beaded embroidery and crystals with a short fluffy skirt

### 1990s Camera Portrait
**Template:**
> Without changing her original face, create a portrait of [subject_description], captured with a 1990s-style camera using a direct front flash. [hair_description], posing with [pose_expression]. She wears [clothing]. The background is [background], evoking a cozy bedroom or personal room atmosphere under dim lighting. The 35mm lens flash creates a nostalgic glow.

**Inputs:**
- subject_description (Subject Description): a beautiful young woman with porcelain-white skin
- hair_description (Hair Description): Her messy dark brown hair is tied up
- pose_expression (Pose & Expression): a calm yet playful smile
- clothing (Clothing): a modern oversized cream sweater
- background (Background): a dark white wall covered with aesthetic magazine posters and stickers

### Business Photo (Silicon Valley)
**Template:**
> Keep the facial features of the person in the uploaded image exactly consistent. Dress them in [outfit], similar to the reference image. Background : Place the subject against [background]. The background should have a subtle gradient, slightly lighter behind the subject and darker towards the edges (vignette effect). There should be no other objects. Photography Style : Shot on a Sony A7III with an 85mm f/1.4 lens, creating a flattering portrait compression. Lighting : Use a classic three-point lighting setup. The main key light should create soft, defining shadows on the face. A subtle rim light should separate the subject's shoulders and hair from the dark background. Crucial Details : Render natural skin texture with visible pores, not an airbrushed look. Add natural catchlights to the eyes. The fabric of the suit should show a subtle wool texture. Final image should be an ultra-realistic, 8k professional headshot.

**Inputs:**
- reference_image (Reference Photo): Upload a clear headshot...
- outfit (Outfit): a professional navy blue business suit with a white shirt
- background (Background): a clean, solid dark gray studio photography backdrop

### Emotional Film Photography
**Template:**
> Keep the facial features of the person in the uploaded image exactly consistent. Style : A cinematic, emotional portrait shot on Kodak Portra 400 film. Setting : [setting]. Warm, nostalgic lighting hitting the side of the face. Atmosphere : Apply a subtle film grain and soft focus to create a dreamy, storytelling vibe. Action : [action]. Details : High quality, depth of field, bokeh background of city lights.

**Inputs:**
- setting (Setting): An urban street coffee shop window at Golden Hour (sunset)
- action (Action): The subject is looking slightly away from the camera, holding a coffee cup, with a relaxed, candid expression

## Creative Experiments
*Pushing boundaries of composition and logic.*

### Star Wars "Where's Waldo"
**Template:**
> A where is waldo image showing [scene]
>
> First one to pull this off. First take. Even Waldo is there.

**Inputs:**
- scene (Scene): all Star Wars characters on Tatooine

### Aging Through the Years
**Template:**
> "Generate the holiday photo of [subject] through the ages up to [age] years old"

**Inputs:**
- subject (Subject): this person
- age (Max Age): 80

### Recursive Visuals
**Template:**
> recursive image of [subject] sitting in [location] holding up [object]. On the [object] is the same [subject] in the same scene holding up the same [object]. Repeated on each [object].

**Inputs:**
- subject (Subject): an orange cat
- location (Location): an office chair
- object (Object): an iPad

### Coordinate Visualization
**Template:**
> [coordinates] at [time]

**Inputs:**
- coordinates (Coordinates): 35.6586° N, 139.7454° E
- time (Time): 19:00

### Conceptual Visualization
**Template:**
> How [group] see [subject]

**Inputs:**
- group (Group): engineers
- subject (Subject): the San Francisco Bridge

### Literal Interpretation
**Template:**
> [filename]

**Inputs:**
- filename (Filename): rare.jpg

### Multi-Subject Compositing
**Template:**
> [description]

**Inputs:**
- description (Description): an office team photo, everyone making a silly face

### Whiteboard Marker Art
**Template:**
> Create a photo of [subject] drawn on a glass whiteboard in a [marker_style]

**Inputs:**
- subject (Subject): vagabonds musashi praying
- marker_style (Marker Style): slightly faded green marker

## Education & Knowledge
*Educational visualizations.*

### Concept Visualization
**Template:**
> Create an educational infographic explaining [topic]. Visual Elements : Illustrate the key components: [components]. Style : Clean, flat vector illustration suitable for a high school science textbook. Use arrows to show the flow of energy and matter. Labels : Label each element clearly in [language].

**Inputs:**
- topic (Topic): Photosynthesis
- components (Components): The Sun, a green Plant, Water (H2O)...
- language (Language): English

## E-commerce & Virtual Studio
*Product photography and virtual try-ons.*

### Virtual Model Try-On
**Template:**
> Using Image 1 (the garment) and Image 2 (the model), create a hyper-realistic full-body fashion photo where the model is wearing the garment. Crucial Fit Details : The [garment_type] must drape naturally on the model's body, conforming to their posture and creating realistic folds and wrinkles. High-Fidelity Preservation : Preserve the original fabric texture, color, and any logos from Image 1 with extreme accuracy. Seamless Integration : Blend the garment into Image 2 by perfectly matching the ambient lighting, color temperature, and shadow direction. Photography Style : Clean e-commerce lookbook, shot on a Canon EOS R5 with a 50mm f/1.8 lens for a natural, professional look.

**Inputs:**
- garment_type (Garment Type): T-shirt/Jacket

### Professional Product Photography
**Template:**
> Identify the main product in the uploaded photo (automatically removing any hands holding it or messy background details). Recreate it as a premium e-commerce product shot. Subject Isolation : Cleanly extract the product, completely removing any fingers, hands, or clutter. Background : Place the product on [background_color] with a subtle, natural contact shadow at the base to ground it. Lighting : Use soft, commercial studio lighting to highlight the product's texture and material. Ensure even illumination with no harsh glare. Retouching : Automatically fix any lens distortion, improve sharpness, and color-correct to make the product look brand new and professional.

**Inputs:**
- background_color (Background Color): a pure white studio background (RGB 255, 255, 255)

### Luxury Product Cover
**Template:**
> [product_name] on the cover, set against an elegant and luxurious [background_style] with [lighting] radiating from behind it.
> The product name “[product_name]” appears at the top center in [font_style], with the [brand_logo] placed just below. Additional text highlights key product details reading: “[feature_line].” A subtle call-to-action label sits beneath the description. The [packaging_details] feature [design_elements], giving it a high-end, luxurious finish. --ar 24:43

**Inputs:**
- product_name (Product Name): Velvet Glow
- background_style (Background Style): deep emerald green silk
- lighting (Lighting): soft golden halo
- font_style (Font Style): gold serif typography
- brand_logo (Brand Logo): minimalist lotus icon
- feature_line (Feature Line): 24H Hydration & Shine
- packaging_details (Packaging Details): sleek glass bottle
- design_elements (Design Elements): gold foil accents

### Brand-Friendly Mockup
**Template:**
> Remove the browser UI and place the pasted website screenshot naturally on the screen of an [device].
>
> Use the screenshot to guide:
>
> - Interior Style: [interior_style]
>
> - Profession of the Space Owner: [profession]
>
> - Mood: [mood]
>
> - Time of day: [time_of_day]
>
> Camera: high-end lifestyle brand film photography, long focal length, close-up framing with shallow depth of field, soft bokeh, slight chromatic aberration at the edges.
>
> Intent: a cohesive, high-quality but approachable scene where the environment gently mirrors the screenshot’s style without feeling luxurious or overly curated.

**Inputs:**
- screenshot (Website Screenshot): Upload screenshot...
- device (Device): Apple Pro Display
- interior_style (Interior Style): everyday, modern, approachable, clean lines, soft color accents
- profession (Profession): software product manager
- mood (Mood): dark walls, well-staged but lived-in, creative, and realistic
- time_of_day (Time of Day): night

## Workplace & Productivity
*Business visualizations and layouts.*

### Hand-drawn Flowchart to Corporate
**Template:**
> Convert this hand-drawn whiteboard sketch into a professional corporate flowchart suitable for a business presentation. Style Guide : Use a minimalist 'McKinsey-style' aesthetic : clean lines, ample whitespace, and a sophisticated blue-and-gray color palette. Structure : Automatically align all boxes and diamonds to a strict grid. Connect them with straight, orthogonal arrows (90-degree angles only, no curvy lines). Text : Transcribe the handwritten labels into a clear, bold Sans-Serif font (like Arial or Roboto). Output : High-resolution vector-style image on a pure white background.

**Inputs:**
- (No inputs)

### UI Sketch to Prototype
**Template:**
> Transform this rough wireframe sketch into a high-fidelity UI design mockups for a mobile app. Design System : Apply a modern, clean aesthetics similar to [design_system]. Use rounded corners, soft drop shadows, and a vibrant primary color. Components : Intelligently interpret the sketch: turn scribbles into high-quality placeholder images, convert rough rectangles into proper buttons with gradients, and turn lines into realistic text blocks. Layout : Ensure perfect padding and consistent spacing between elements. Context : Place the design inside a realistic [device_frame] frame mockups.

**Inputs:**
- design_system (Design System): iOS 18 or Material Design 3
- device_frame (Device Frame): iPhone 16

### Magazine Layout Generator
**Template:**
> Put this whole text, verbatim, into a photo of a glossy magazine article on a desk, with photos, beautiful typography design, pull quotes and brave formatting. The text: [text]

**Inputs:**
- text (Article Text): Paste your article text here...

## Photo Editing & Restoration
*Smart editing and restoration.*

### Composition Rescue (Outpainting)
**Template:**
> Zoom out and expand this image to a [aspect_ratio] aspect ratio. Context Awareness : Seamlessly extend the scenery on both left and right sides. Match the original lighting, weather, and texture perfectly. Logical Completion : If there are cut-off objects (like a shoulder, a tree branch, or a building edge) on the borders, complete them naturally based on logical inference. Do not distort the original center image.

**Inputs:**
- aspect_ratio (Aspect Ratio): 16:9

### Smart Crowd Removal
**Template:**
> Remove all the tourists/people in the background behind the main subject. Intelligent Fill : Replace them with realistic background elements that logically fit the scene (e.g., [fill_elements]). Consistency : Ensure no blurry artifacts or 'smudges' remain. The filled area must have the same grain, focus depth, and lighting as the rest of the photo.

**Inputs:**
- fill_elements (Fill Elements): extend the cobblestone pavement, empty park benches, or grass textures

### Restore Old Photo
**Template:**
> Faithfully restore this image with high fidelity to modern photograph quality, in full color, upscale to 4K

**Inputs:**
- image (Upload Photo): Upload an old photo...

## Interior Design
*Floor plans to design boards.*

### Hard Furnishing Preview
**Template:**
> Based on the uploaded 2D floor plan, generate a professional interior design presentation board in a single image. Layout : The final image should be a collage with one large main image at the top, and several smaller images below it. Content of Each Panel :
> 1. Main Image (Top) : [main_view].
> 2. Small Image (Bottom Left) : [view_2].
> 3. Small Image (Bottom Middle) : [view_3].
> 4. Small Image (Bottom Right) : A 3D top-down floor plan view showing the furniture layout. Overall Style : Apply a consistent [style] style with [materials] across ALL images. Quality : Photorealistic rendering, soft natural lighting.

**Inputs:**
- main_view (Main View): A wide-angle perspective view of the main living area...
- view_2 (View 2): A view of the Master Bedroom...
- view_3 (View 3): A view of the Home Office...
- style (Style): Modern Minimalist
- materials (Materials): warm oak wood flooring and off-white walls

## Social Media & Marketing
*Viral content and posters.*

### Viral Cover Image
**Template:**
> Design a viral video thumbnail using the person from Image 1. Face Consistency : Keep the person's facial features exactly the same as Image 1, but change their expression to look [expression]. Action : [action]. Subject : On the right side, place a high-quality image of [subject_right]. Graphics : [graphics]. Text : Overlay massive, pop-style text in the middle: '[text]'. Use a thick white outline and drop shadow. Background : [background].

**Inputs:**
- expression (Expression): excited and surprised
- action (Action): Pose the person on the left side, pointing their finger...
- subject_right (Subject (Right)): a delicious avocado toast
- graphics (Graphics): Add a bold yellow arrow...
- text (Text): 3分钟搞定! (Done in 3 mins!)
- background (Background): A blurred, bright kitchen background. High saturation and contrast.

### Commercial Promotional Poster
**Template:**
> Design a professional promotional poster for a [business]. Composition : [composition]. Text Integration :
> 1. Main Title : '[title]' written in [title_style].
> 2. Offer : '[offer]' clearly displayed in a modern badge or sticker style on the side.
> 3. Footer : '[footer]' in small, clean text at the bottom. Quality : Ensure all text is perfectly spelled, centered, and integrated into the image's depth of field.

**Inputs:**
- business (Business): Coffee Shop
- composition (Composition): A cinematic close-up of a steaming cup of cappuccino...
- title (Main Title): Autumn Special
- title_style (Title Style): elegant, gold serif typography at the top
- offer (Offer): Buy One Get One Free
- footer (Footer): Limited Time Only

## Daily Life & Translation
*Translations and localization.*

### Physical Store/Travel Translation
**Template:**
> Translate the [source_language] [content_type] into [target_language] for foreign tourists. Texture Preservation : Crucial! Maintain the original aged, greasy, and textured look of the wall/paper. The new [target_language] text should look like it was written/printed on the same surface, with slight fading or wear to match. Currency : Keep the '¥' symbol and price numbers exactly as they are ; do not convert currency. Layout : align the [target_language] translations next to or replacing the [source_language] characters naturally.

**Inputs:**
- source_language (Source Language): Chinese
- content_type (Content Type): dish names on the wall menu
- target_language (Target Language): English

### Digital Content Localization
**Template:**
> Translate the text in the speech bubbles/captions from [source_language] to [target_language]. Seamless Cleaning : Erase the original text and perfectly fill the background (e.g., the white speech bubble or the colored image background). Style Matching : Render the translated [target_language] text using a [font_style] that matches the aesthetic of the original image. Fit : Ensure the text fits naturally within the bubbles without overcrowding.

**Inputs:**
- source_language (Source Language): Japanese/English
- target_language (Target Language): Chinese
- font_style (Font Style): casual, handwritten-style font

## Social Networking & Avatars
*Avatars and memes.*

### 3D Blind Box Style Avatar
**Template:**
> Transform the person in the uploaded photo into a cute 3D Pop Mart style blind box character. Likeness : Keep key features recognizable: [features]. Style : C4D rendering, occlusion render, cute Q-version, soft studio lighting, pastel colors. Background : [background]. Detail : The character should have a smooth, plastic toy texture with a slight glossy finish. Facing forward, friendly expression.

**Inputs:**
- features (Features): hair color, glasses, hairstyle
- background (Background): A simple, solid matte color background (e.g., soft blue)

### Pet Meme Creation
**Template:**
> Turn this photo of my [pet] into a funny hand-drawn WeChat sticker. Style : Minimalist ugly-cute line drawing (doodle style). White background. Expression : Exaggerate the animal's expression to look [expression]. Accessories : Add cute little doodles like [doodles]. Text : Add handwritten text at the bottom: '[text]'. Ensure the text style is messy and funny.

**Inputs:**
- pet (Pet): cat/dog
- expression (Expression): extremely shocked/judgemental/lazy
- doodles (Doodles): sweat drops, question marks, or sparkles
- text (Text): So Dumb

## New Additions
*Latest experimental prompts.*

### Memory Palace Learning
**Template:**
> Create a detailed {{[scene]}} scene with English vocabulary labels for all objects. The format for labeling is: Line 1: English word, Line 2: IPA pronunciation, Line 3: Chinese translation

**Inputs:**
- scene (Scene): pet store

### Googly Eyes and Stick Hands
**Template:**
> Add illustrated googly eyes and stick hands on the ([subject]) in an exaggerated comedic pose

**Inputs:**
- subject (Subject): object/animal/ your bff

### Cartoon-Style Infographic
**Template:**
> --- Prompt ---
>
> Please create a cartoon-style infographic based on the provided content, following these guidelines:
>
> - Hand-drawn illustration style, landscape orientation (16:9 aspect ratio).
>
> - Include a small number of simple cartoon elements, icons, or famous personalities to enhance visual interest and memorability.
>
> - If the content includes sensitive or copyrighted figures, replace them with visually similar alternatives; do not refuse to generate the illustration.
>
> - All imagery and text must strictly adhere to a hand-drawn style; avoid realistic visual elements.
>
> - Keep information concise, highlighting keywords and core concepts. Utilize ample whitespace to clearly emphasize key points.
>
> - Unless otherwise specified, use the same language as the provided content.
>
> Please use nano banana pro to create the illustration based on the input provided.

**Inputs:**
- (No inputs)

### Weather Card Generator
**Template:**
> --- prompt ---
>
> Present a clear, 45° top-down view of a vertical (9:16) isometric miniature 3D cartoon scene, highlighting iconic landmarks centered in the composition to showcase precise and delicate modeling.
>
> The scene features soft, refined textures with realistic PBR materials and gentle, lifelike lighting and shadow effects. Weather elements are creatively integrated into the urban architecture, establishing a dynamic interaction between the city's landscape and atmospheric conditions, creating an immersive weather ambiance.
>
> Use a clean, unified composition with minimalistic aesthetics and a soft, solid-colored background that highlights the main content. The overall visual style is fresh and soothing.
>
> Display a prominent weather icon at the top-center, with the date (x-small text) and temperature range (medium text) beneath it. The city name (large text) is positioned directly above the weather icon. The weather information has no background and can subtly overlap with the buildings.
>
> The text should match the input city's native language.
> Please retrieve current weather conditions for the specified city before rendering.
>
> City name:【[city]】

**Inputs:**
- city (City Name): New York

## Wallpapers & Backgrounds
*Aesthetic wallpapers for mobile and desktop.*

### Cute Animal Wallpaper
**Template:**
> iphone wallpaper with 10 cute [animal_name] curiously looking down at the screen directly at the camera, camera pointing up at the sky --ar 9:16

**Inputs:**
- animal_name (Animal Name): cats

## Vintage Racing
*Retro motorsport moments with analog aesthetics.*

### Retro Grand Prix
**Template:**
> lively scene at the [gp_name] in the [year]. Iconic [car_type] cars racing through [track_description], engines roaring, vibrant crowd cheering from packed grandstands. Elegant spectators in vintage [year] fashion leaning over barriers to watch the action. [environment_description]. Sunlight reflecting on the cars’ polished bodies, heat haze rising from the asphalt, excitement in the air. Warm tones, moderate contrast, nostalgic atmosphere. Shot on Kodak Eastman 100T 5247, 35mm film look, fine analog grain, warm slightly faded colors, gentle contrast, soft nostalgic patina. Subtle scanlines, natural lens flares, light leaks, slight VHS cassette texture, authentic [year] analog imperfections. Cinematic, realistic, immersive mood. Designed for Instagram story format. --ar 9:16

**Inputs:**
- gp_name (Grand Prix Name): Monaco Grand Prix
- year (Year): 1980s
- car_type (Car Type): Formula 1
- track_description (Track Description): the narrow streets of Monte-Carlo
- environment_description (Environment): The harbor is filled with luxurious yachts, colorful flags fluttering in the warm Mediterranean breeze
