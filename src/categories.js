export const categories = [
  {
    id: 'photorealism',
    title: 'Photorealism & Aesthetics',
    description: 'High-fidelity prompts for complex lighting, textures, and specific eras.',
    items: [
      {
        id: 'crowd',
        title: 'Hyper-Realistic Crowd',
        description: 'Complex compositions with multiple faces and specific lighting.',
        template: 'Create a hyper-realistic, ultra-sharp, full-color large-format image featuring a massive group of [subject] standing together in a single wide cinematic frame. The image must look like a perfectly photographed editorial cover with impeccable lighting, lifelike skin texture, micro-details of hair, pores, reflections, and fabric fibers.\n\nGENERAL STYLE & MOOD: Photorealistic, 8k, shallow depth of field, soft natural fill light + strong golden rim light. High dynamic range, calibrated color grading. Skin tones perfectly accurate. Crisp fabric detail with individual threads visible. Balanced composition, slightly wide-angle lens (35mm), center-weighted. All subjects interacting naturally, smiling, posing, or conversing. Minimal background noise, but with enough world-building to feel real.\n\nTHE ENVIRONMENT: [environment]. Elements include: Warm golden light wrapping around silhouettes. Polished marble.',
        inputs: [
          { name: 'subject', label: 'Subject Group', type: 'text', placeholder: 'celebrities from different eras' },
          { name: 'environment', label: 'Environment', type: 'text', placeholder: 'A luxurious open-air rooftop terrace at sunset overlooking a modern city skyline' }
        ]
      },
      {
        id: 'mirror-selfie',
        title: '2000s Mirror Selfie',
        description: 'Authentic early-2000s aesthetic with flash photography.',
        template: 'Create a 2000s Mirror Selfie of yourself using Gemini Nano Banana.\n\n{\n  "subject": {\n    "description": "[description]",\n    "age": "[age]",\n    "expression": "[expression]",\n    "hair": {\n      "color": "[hair_color]",\n      "style": "[hair_style]"\n    },\n    "clothing": {\n      "top": {\n        "type": "[top_type]",\n        "color": "[top_color]",\n        "details": "[top_details]"\n      }\n    },\n    "face": {\n      "preserve_original": true,\n      "makeup": "[makeup]"\n    }\n  },\n  "accessories": {\n    "earrings": {\n      "type": "[earrings]"\n    },\n    "jewelry": {\n      "waistchain": "[waistchain]"\n    },\n    "device": {\n      "type": "smartphone",\n      "details": "patterned case"\n    }\n  },\n  "photography": {\n    "camera_style": "early-2000s digital camera aesthetic",\n    "lighting": "harsh super-flash with bright blown-out highlights but subject still visible",\n    "angle": "mirror selfie",\n    "shot_type": "tight selfie composition",\n    "texture": "subtle grain, retro highlights, V6 realism, crisp details, soft shadows"\n  },\n  "background": {\n    "setting": "[setting]",\n    "wall_color": "[wall_color]",\n    "elements": [\n      "chunky wooden dresser",\n      "CD player",\n      "posters of 2000s pop icons",\n      "hanging beaded door curtain",\n      "cluttered vanity with lip glosses"\n    ],\n    "atmosphere": "authentic 2000s nostalgic vibe",\n    "lighting": "retro"\n  }\n}',
        inputs: [
          { name: 'description', label: 'Description', type: 'text', placeholder: 'A young woman taking a mirror selfie...' },
          { name: 'age', label: 'Age', type: 'text', placeholder: 'young adult' },
          { name: 'expression', label: 'Expression', type: 'text', placeholder: 'confident and slightly playful' },
          { name: 'hair_color', label: 'Hair Color', type: 'text', placeholder: 'dark' },
          { name: 'hair_style', label: 'Hair Style', type: 'text', placeholder: 'very long, voluminous waves...' },
          { name: 'top_type', label: 'Top Type', type: 'text', placeholder: 'fitted cropped t-shirt' },
          { name: 'top_color', label: 'Top Color', type: 'text', placeholder: 'cream white' },
          { name: 'top_details', label: 'Top Details', type: 'text', placeholder: 'features a large cute anime-style cat...' },
          { name: 'makeup', label: 'Makeup', type: 'text', placeholder: 'natural glam makeup...' },
          { name: 'earrings', label: 'Earrings', type: 'text', placeholder: 'gold geometric hoop earrings' },
          { name: 'waistchain', label: 'Waistchain', type: 'text', placeholder: 'silver waistchain' },
          { name: 'setting', label: 'Setting', type: 'text', placeholder: 'nostalgic early-2000s bedroom' },
          { name: 'wall_color', label: 'Wall Color', type: 'text', placeholder: 'pastel tones' }
        ]
      },
      {
        id: 'vs-photoshoot',
        title: "Victoria's Secret Style",
        description: 'High-glamour, backstage-style fashion photography.',
        template: "Create a glamorous photoshoot in the style of Victoria's Secret. [subject_description] stands almost sideways, slightly bent forward, during the final preparation for the show. Makeup artists apply lipstick to her (only her hands are visible in the frame). She is wearing [outfit], as well as large feather wings. The image has a \"backstage\" effect.\n\nThe background is a darkly lit room, probably under the podium. The main emphasis is on the girl's face and the details of her costume. Emphasize the expressiveness of the gaze and the luxurious look of the outfit. The photo is lit by a flash from the camera, which emphasizes the shine of the beads and crystals on the corset, as well as the girl's shiny skin. Victoria's Secret style: sensuality, luxury, glamour. Very detailed. Important: do not change the face.",
        inputs: [
          { name: 'subject_description', label: 'Subject Description', type: 'textarea', placeholder: 'A young woman attached in the uploaded reference image...' },
          { name: 'outfit', label: 'Outfit', type: 'textarea', placeholder: 'a corset decorated with beaded embroidery and crystals with a short fluffy skirt' }
        ]
      },
      {
        id: '90s-camera',
        title: '1990s Camera Portrait',
        description: 'Replicate specific film textures and flash photography.',
        template: "Without changing her original face, create a portrait of [subject_description], captured with a 1990s-style camera using a direct front flash. [hair_description], posing with [pose_expression]. She wears [clothing]. The background is [background], evoking a cozy bedroom or personal room atmosphere under dim lighting. The 35mm lens flash creates a nostalgic glow.",
        inputs: [
          { name: 'subject_description', label: 'Subject Description', type: 'text', placeholder: 'a beautiful young woman with porcelain-white skin' },
          { name: 'hair_description', label: 'Hair Description', type: 'text', placeholder: 'Her messy dark brown hair is tied up' },
          { name: 'pose_expression', label: 'Pose & Expression', type: 'text', placeholder: 'a calm yet playful smile' },
          { name: 'clothing', label: 'Clothing', type: 'text', placeholder: 'a modern oversized cream sweater' },
          { name: 'background', label: 'Background', type: 'text', placeholder: 'a dark white wall covered with aesthetic magazine posters and stickers' }
        ]
      },
      {
        id: 'business-photo',
        title: 'Business Photo (Silicon Valley)',
        description: 'Professional studio headshots.',
        template: "Keep the facial features of the person in the uploaded image exactly consistent. Dress them in [outfit], similar to the reference image. Background : Place the subject against [background]. The background should have a subtle gradient, slightly lighter behind the subject and darker towards the edges (vignette effect). There should be no other objects. Photography Style : Shot on a Sony A7III with an 85mm f/1.4 lens, creating a flattering portrait compression. Lighting : Use a classic three-point lighting setup. The main key light should create soft, defining shadows on the face. A subtle rim light should separate the subject's shoulders and hair from the dark background. Crucial Details : Render natural skin texture with visible pores, not an airbrushed look. Add natural catchlights to the eyes. The fabric of the suit should show a subtle wool texture. Final image should be an ultra-realistic, 8k professional headshot.",
        inputs: [
          { name: 'reference_image', label: 'Reference Photo', type: 'file', placeholder: 'Upload a clear headshot...' },
          { name: 'outfit', label: 'Outfit', type: 'text', placeholder: 'a professional navy blue business suit with a white shirt' },
          { name: 'background', label: 'Background', type: 'text', placeholder: 'a clean, solid dark gray studio photography backdrop' }
        ]
      },
      {
        id: 'emotional-film',
        title: 'Emotional Film Photography',
        description: 'Cinematic, nostalgic "Kodak Portra" look.',
        template: "Keep the facial features of the person in the uploaded image exactly consistent. Style : A cinematic, emotional portrait shot on Kodak Portra 400 film. Setting : [setting]. Warm, nostalgic lighting hitting the side of the face. Atmosphere : Apply a subtle film grain and soft focus to create a dreamy, storytelling vibe. Action : [action]. Details : High quality, depth of field, bokeh background of city lights.",
        inputs: [
          { name: 'reference_image', label: 'Reference Photo', type: 'file', placeholder: 'Upload a reference photo...' },
          { name: 'setting', label: 'Setting', type: 'text', placeholder: 'An urban street coffee shop window at Golden Hour (sunset)' },
          { name: 'action', label: 'Action', type: 'text', placeholder: 'The subject is looking slightly away from the camera, holding a coffee cup, with a relaxed, candid expression' }
        ]
      }
    ]
  },
  {
    id: 'creative',
    title: 'Creative Experiments',
    description: 'Pushing boundaries of composition and logic.',
    items: [
      {
        id: 'wheres-waldo',
        title: 'Star Wars "Where\'s Waldo"',
        description: 'Dense crowds and character recognition.',
        template: "A where is waldo image showing [scene]\n\nFirst one to pull this off. First take. Even Waldo is there.",
        inputs: [
          { name: 'scene', label: 'Scene', type: 'text', placeholder: 'all Star Wars characters on Tatooine' }
        ]
      },
      {
        id: 'aging',
        title: 'Aging Through the Years',
        description: 'Temporal consistency and aging effects.',
        template: "\"Generate the holiday photo of the person in the uploaded image through the ages up to [age] years old\"",
        inputs: [
          { name: 'reference_image', label: 'Reference Photo', type: 'file', placeholder: 'Upload a reference photo...' },
          { name: 'age', label: 'Max Age', type: 'number', placeholder: '80' }
        ]
      },
      {
        id: 'recursive',
        title: 'Recursive Visuals',
        description: 'Infinite loop logic (Droste effect).',
        template: "recursive image of [subject] sitting in [location] holding up [object]. On the [object] is the same [subject] in the same scene holding up the same [object]. Repeated on each [object].",
        inputs: [
          { name: 'subject', label: 'Subject', type: 'text', placeholder: 'an orange cat' },
          { name: 'location', label: 'Location', type: 'text', placeholder: 'an office chair' },
          { name: 'object', label: 'Object', type: 'text', placeholder: 'an iPad' }
        ]
      },
      {
        id: 'coordinate',
        title: 'Coordinate Visualization',
        description: 'Generate location based on coordinates.',
        template: "[coordinates] at [time]",
        inputs: [
          { name: 'coordinates', label: 'Coordinates', type: 'text', placeholder: '35.6586° N, 139.7454° E' },
          { name: 'time', label: 'Time', type: 'text', placeholder: '19:00' }
        ]
      },
      {
        id: 'conceptual',
        title: 'Conceptual Visualization',
        description: 'Interpretative rendering of concepts.',
        template: "How [group] see [subject]",
        inputs: [
          { name: 'group', label: 'Group', type: 'text', placeholder: 'engineers' },
          { name: 'subject', label: 'Subject', type: 'text', placeholder: 'the San Francisco Bridge' }
        ]
      },
      {
        id: 'literal',
        title: 'Literal Interpretation',
        description: 'Interprets a filename as a visual subject.',
        template: "[filename]",
        inputs: [
          { name: 'filename', label: 'Filename', type: 'text', placeholder: 'rare.jpg' }
        ]
      },
      {
        id: 'multi-subject',
        title: 'Multi-Subject Compositing',
        description: 'Combines multiple inputs into a group photo.',
        template: "Using the provided reference images as the source subjects, create a composite image matching this description: [description]. Maintain the visual characteristics of the subjects in the reference images.",
        inputs: [
          { name: 'ref_img_1', label: 'Reference Image 1', type: 'file', placeholder: 'Upload subject 1...' },
          { name: 'ref_img_2', label: 'Reference Image 2', type: 'file', placeholder: 'Upload subject 2...' },
          { name: 'ref_img_3', label: 'Reference Image 3', type: 'file', placeholder: 'Upload subject 3...' },
          { name: 'description', label: 'Description', type: 'text', placeholder: 'an office team photo, everyone making a silly face' }
        ]
      },
      {
        id: 'whiteboard',
        title: 'Whiteboard Marker Art',
        description: 'Simulating drawing media on glass.',
        template: "Create a photo of [subject] drawn on a glass whiteboard in a [marker_style]",
        inputs: [
          { name: 'subject', label: 'Subject', type: 'text', placeholder: 'vagabonds musashi praying' },
          { name: 'marker_style', label: 'Marker Style', type: 'text', placeholder: 'slightly faded green marker' }
        ]
      }
    ]
  },
  {
    id: 'education',
    title: 'Education & Knowledge',
    description: 'Educational visualizations.',
    items: [
      {
        id: 'concept-viz',
        title: 'Concept Visualization',
        description: 'Text to Infographic.',
        template: "Create an educational infographic explaining [topic]. Visual Elements : Illustrate the key components: [components]. Style : Clean, flat vector illustration suitable for a high school science textbook. Use arrows to show the flow of energy and matter. Labels : Label each element clearly in [language].",
        inputs: [
          { name: 'topic', label: 'Topic', type: 'text', placeholder: 'Photosynthesis' },
          { name: 'components', label: 'Components', type: 'textarea', placeholder: 'The Sun, a green Plant, Water (H2O)...' },
          { name: 'language', label: 'Language', type: 'text', placeholder: 'English' }
        ]
      }
    ]
  },
  {
    id: 'ecommerce',
    title: 'E-commerce & Virtual Studio',
    description: 'Product photography and virtual try-ons.',
    items: [
      {
        id: 'virtual-try-on',
        title: 'Virtual Model Try-On',
        description: 'Dresses a model in a specific garment.',
        template: "Using Image 1 (the garment) and Image 2 (the model), create a hyper-realistic full-body fashion photo where the model is wearing the garment. Crucial Fit Details : The [garment_type] must drape naturally on the model's body, conforming to their posture and creating realistic folds and wrinkles. High-Fidelity Preservation : Preserve the original fabric texture, color, and any logos from Image 1 with extreme accuracy. Seamless Integration : Blend the garment into Image 2 by perfectly matching the ambient lighting, color temperature, and shadow direction. Photography Style : Clean e-commerce lookbook, shot on a Canon EOS R5 with a 50mm f/1.8 lens for a natural, professional look.",
        inputs: [
          { name: 'garment_type', label: 'Garment Type', type: 'text', placeholder: 'T-shirt/Jacket' }
        ]
      },
      {
        id: 'product-photo',
        title: 'Professional Product Photography',
        description: 'Isolates products for commercial studio settings.',
        template: "Identify the main product in the uploaded photo (automatically removing any hands holding it or messy background details). Recreate it as a premium e-commerce product shot. Subject Isolation : Cleanly extract the product, completely removing any fingers, hands, or clutter. Background : Place the product on [background_color] with a subtle, natural contact shadow at the base to ground it. Lighting : Use soft, commercial studio lighting to highlight the product's texture and material. Ensure even illumination with no harsh glare. Retouching : Automatically fix any lens distortion, improve sharpness, and color-correct to make the product look brand new and professional.",
        inputs: [
          { name: 'background_color', label: 'Background Color', type: 'text', placeholder: 'a pure white studio background (RGB 255, 255, 255)' }
        ]
      },
      {
        id: 'luxury-product-cover',
        title: 'Luxury Product Cover',
        description: 'High-end product advertisement with elegant lighting and details.',
        template: "[product_name] on the cover, set against an elegant and luxurious [background_style] with [lighting] radiating from behind it.\nThe product name “[product_name]” appears at the top center in [font_style], with the [brand_logo] placed just below. Additional text highlights key product details reading: “[feature_line].” A subtle call-to-action label sits beneath the description. The [packaging_details] feature [design_elements], giving it a high-end, luxurious finish. --ar 24:43",
        inputs: [
          { name: 'product_name', label: 'Product Name', type: 'text', placeholder: 'Velvet Glow' },
          { name: 'background_style', label: 'Background Style', type: 'text', placeholder: 'deep emerald green silk' },
          { name: 'lighting', label: 'Lighting', type: 'text', placeholder: 'soft golden halo' },
          { name: 'font_style', label: 'Font Style', type: 'text', placeholder: 'gold serif typography' },
          { name: 'brand_logo', label: 'Brand Logo', type: 'text', placeholder: 'minimalist lotus icon' },
          { name: 'feature_line', label: 'Feature Line', type: 'text', placeholder: '24H Hydration & Shine' },
          { name: 'packaging_details', label: 'Packaging Details', type: 'text', placeholder: 'sleek glass bottle' },
          { name: 'design_elements', label: 'Design Elements', type: 'text', placeholder: 'gold foil accents' }
        ]
      },
      {
        id: 'brand-mockup',
        title: 'Brand-Friendly Mockup',
        description: 'Place a website screenshot on a device in a lifestyle setting.',
        template: "Remove the browser UI and place the pasted website screenshot naturally on the screen of an [device].\n\nUse the screenshot to guide:\n\n- Interior Style: [interior_style]\n\n- Profession of the Space Owner: [profession]\n\n- Mood: [mood]\n\n- Time of day: [time_of_day]\n\nCamera: high-end lifestyle brand film photography, long focal length, close-up framing with shallow depth of field, soft bokeh, slight chromatic aberration at the edges.\n\nIntent: a cohesive, high-quality but approachable scene where the environment gently mirrors the screenshot’s style without feeling luxurious or overly curated.",
        inputs: [
          { name: 'screenshot', label: 'Website Screenshot', type: 'file', placeholder: 'Upload screenshot...' },
          {
            name: 'device',
            label: 'Device',
            type: 'combobox',
            placeholder: 'Apple Pro Display',
            options: ['Apple Pro Display', 'MacBook Pro 16"', 'iMac 24"', 'iPad Pro']
          },
          {
            name: 'interior_style',
            label: 'Interior Style',
            type: 'combobox',
            placeholder: 'everyday, modern, approachable, clean lines, soft color accents',
            options: [
              'everyday, modern, approachable, clean lines, soft color accents',
              'minimalist, industrial, raw concrete, monochromatic',
              'warm, cozy, wooden textures, soft lighting, plants',
              'scandinavian, light wood, white walls, airy'
            ]
          },
          {
            name: 'profession',
            label: 'Profession',
            type: 'combobox',
            placeholder: 'software product manager',
            options: ['software product manager', 'creative director', 'architect', 'developer', 'designer', 'content creator']
          },
          {
            name: 'mood',
            label: 'Mood',
            type: 'combobox',
            placeholder: 'dark walls, well-staged but lived-in, creative, and realistic',
            options: [
              'dark walls, well-staged but lived-in, creative, and realistic',
              'bright, airy, sun-drenched, energetic',
              'calm, focused, zen-like, organized',
              'moody, dark academia, intellectual, cozy'
            ]
          },
          {
            name: 'time_of_day',
            label: 'Time of Day',
            type: 'combobox',
            placeholder: 'night',
            options: ['night', 'day', 'golden hour', 'blue hour', 'mid-day']
          }
        ]
      }
    ]
  },
  {
    id: 'workplace',
    title: 'Workplace & Productivity',
    description: 'Business visualizations and layouts.',
    items: [
      {
        id: 'flowchart',
        title: 'Hand-drawn Flowchart to Corporate',
        description: 'Converts sketches to professional charts.',
        template: "Convert this hand-drawn whiteboard sketch into a professional corporate flowchart suitable for a business presentation. Style Guide : Use a minimalist 'McKinsey-style' aesthetic : clean lines, ample whitespace, and a sophisticated blue-and-gray color palette. Structure : Automatically align all boxes and diamonds to a strict grid. Connect them with straight, orthogonal arrows (90-degree angles only, no curvy lines). Text : Transcribe the handwritten labels into a clear, bold Sans-Serif font (like Arial or Roboto). Output : High-resolution vector-style image on a pure white background.",
        inputs: []
      },
      {
        id: 'ui-sketch',
        title: 'UI Sketch to Prototype',
        description: 'Transforms wireframes to mockups.',
        template: "Transform this rough wireframe sketch into a high-fidelity UI design mockups for a mobile app. Design System : Apply a modern, clean aesthetics similar to [design_system]. Use rounded corners, soft drop shadows, and a vibrant primary color. Components : Intelligently interpret the sketch: turn scribbles into high-quality placeholder images, convert rough rectangles into proper buttons with gradients, and turn lines into realistic text blocks. Layout : Ensure perfect padding and consistent spacing between elements. Context : Place the design inside a realistic [device_frame] frame mockups.",
        inputs: [
          { name: 'design_system', label: 'Design System', type: 'text', placeholder: 'iOS 18 or Material Design 3' },
          { name: 'device_frame', label: 'Device Frame', type: 'text', placeholder: 'iPhone 16' }
        ]
      },
      {
        id: 'magazine',
        title: 'Magazine Layout Generator',
        description: 'Visualizes articles in print format.',
        template: "Put this whole text, verbatim, into a photo of a glossy magazine article on a desk, with photos, beautiful typography design, pull quotes and brave formatting. The text: [text]",
        inputs: [
          { name: 'text', label: 'Article Text', type: 'textarea', placeholder: 'Paste your article text here...' }
        ]
      }
    ]
  },
  {
    id: 'editing',
    title: 'Photo Editing & Restoration',
    description: 'Smart editing and restoration.',
    items: [
      {
        id: 'outpainting',
        title: 'Composition Rescue (Outpainting)',
        description: 'Expands image ratios.',
        template: "Zoom out and expand this image to a [aspect_ratio] aspect ratio. Context Awareness : Seamlessly extend the scenery on both left and right sides. Match the original lighting, weather, and texture perfectly. Logical Completion : If there are cut-off objects (like a shoulder, a tree branch, or a building edge) on the borders, complete them naturally based on logical inference. Do not distort the original center image.",
        inputs: [
          { name: 'aspect_ratio', label: 'Aspect Ratio', type: 'text', placeholder: '16:9' }
        ]
      },
      {
        id: 'crowd-removal',
        title: 'Smart Crowd Removal',
        description: 'Removes unwanted people.',
        template: "Remove all the tourists/people in the background behind the main subject. Intelligent Fill : Replace them with realistic background elements that logically fit the scene (e.g., [fill_elements]). Consistency : Ensure no blurry artifacts or 'smudges' remain. The filled area must have the same grain, focus depth, and lighting as the rest of the photo.",
        inputs: [
          { name: 'fill_elements', label: 'Fill Elements', type: 'text', placeholder: 'extend the cobblestone pavement, empty park benches, or grass textures' }
        ]
      },
      {
        id: 'restore-photo',
        title: 'Restore Old Photo',
        description: 'Restores old or damaged photos to modern quality.',
        template: "Faithfully restore this image with high fidelity to modern photograph quality, in full color, upscale to 4K",
        inputs: [
          { name: 'image', label: 'Upload Photo', type: 'file', placeholder: 'Upload an old photo...' }
        ]
      }
    ]
  },
  {
    id: 'interior',
    title: 'Interior Design',
    description: 'Floor plans to design boards.',
    items: [
      {
        id: 'furnishing',
        title: 'Hard Furnishing Preview',
        description: 'Design presentation board from floor plan.',
        template: "Based on the uploaded 2D floor plan, generate a professional interior design presentation board in a single image. Layout : The final image should be a collage with one large main image at the top, and several smaller images below it. Content of Each Panel :\n1. Main Image (Top) : [main_view].\n2. Small Image (Bottom Left) : [view_2].\n3. Small Image (Bottom Middle) : [view_3].\n4. Small Image (Bottom Right) : A 3D top-down floor plan view showing the furniture layout. Overall Style : Apply a consistent [style] style with [materials] across ALL images. Quality : Photorealistic rendering, soft natural lighting.",
        inputs: [
          { name: 'main_view', label: 'Main View', type: 'text', placeholder: 'A wide-angle perspective view of the main living area...' },
          { name: 'view_2', label: 'View 2', type: 'text', placeholder: 'A view of the Master Bedroom...' },
          { name: 'view_3', label: 'View 3', type: 'text', placeholder: 'A view of the Home Office...' },
          { name: 'style', label: 'Style', type: 'text', placeholder: 'Modern Minimalist' },
          { name: 'materials', label: 'Materials', type: 'text', placeholder: 'warm oak wood flooring and off-white walls' }
        ]
      }
    ]
  },
  {
    id: 'social-media',
    title: 'Social Media & Marketing',
    description: 'Viral content and posters.',
    items: [
      {
        id: 'viral-cover',
        title: 'Viral Cover Image',
        description: 'Engaging thumbnails with text overlays.',
        template: "Design a viral video thumbnail using the person from Image 1. Face Consistency : Keep the person's facial features exactly the same as Image 1, but change their expression to look [expression]. Action : [action]. Subject : On the right side, place a high-quality image of [subject_right]. Graphics : [graphics]. Text : Overlay massive, pop-style text in the middle: '[text]'. Use a thick white outline and drop shadow. Background : [background].",
        inputs: [
          { name: 'expression', label: 'Expression', type: 'text', placeholder: 'excited and surprised' },
          { name: 'action', label: 'Action', type: 'text', placeholder: 'Pose the person on the left side, pointing their finger...' },
          { name: 'subject_right', label: 'Subject (Right)', type: 'text', placeholder: 'a delicious avocado toast' },
          { name: 'graphics', label: 'Graphics', type: 'text', placeholder: 'Add a bold yellow arrow...' },
          { name: 'text', label: 'Text', type: 'text', placeholder: '3分钟搞定! (Done in 3 mins!)' },
          { name: 'background', label: 'Background', type: 'text', placeholder: 'A blurred, bright kitchen background. High saturation and contrast.' }
        ]
      },
      {
        id: 'poster',
        title: 'Commercial Promotional Poster',
        description: 'Professional sales posters.',
        template: "Design a professional promotional poster for a [business]. Composition : [composition]. Text Integration :\n1. Main Title : '[title]' written in [title_style].\n2. Offer : '[offer]' clearly displayed in a modern badge or sticker style on the side.\n3. Footer : '[footer]' in small, clean text at the bottom. Quality : Ensure all text is perfectly spelled, centered, and integrated into the image's depth of field.",
        inputs: [
          { name: 'business', label: 'Business', type: 'text', placeholder: 'Coffee Shop' },
          { name: 'composition', label: 'Composition', type: 'text', placeholder: 'A cinematic close-up of a steaming cup of cappuccino...' },
          { name: 'title', label: 'Main Title', type: 'text', placeholder: 'Autumn Special' },
          { name: 'title_style', label: 'Title Style', type: 'text', placeholder: 'elegant, gold serif typography at the top' },
          { name: 'offer', label: 'Offer', type: 'text', placeholder: 'Buy One Get One Free' },
          { name: 'footer', label: 'Footer', type: 'text', placeholder: 'Limited Time Only' }
        ]
      }
    ]
  },
  {
    id: 'daily-life',
    title: 'Daily Life & Translation',
    description: 'Translations and localization.',
    items: [
      {
        id: 'translation',
        title: 'Physical Store/Travel Translation',
        description: 'Translates menus or signs preserving texture.',
        template: "Translate the [source_language] [content_type] into [target_language] for foreign tourists. Texture Preservation : Crucial! Maintain the original aged, greasy, and textured look of the wall/paper. The new [target_language] text should look like it was written/printed on the same surface, with slight fading or wear to match. Currency : Keep the '¥' symbol and price numbers exactly as they are ; do not convert currency. Layout : align the [target_language] translations next to or replacing the [source_language] characters naturally.",
        inputs: [
          { name: 'source_language', label: 'Source Language', type: 'text', placeholder: 'Chinese' },
          { name: 'content_type', label: 'Content Type', type: 'text', placeholder: 'dish names on the wall menu' },
          { name: 'target_language', label: 'Target Language', type: 'text', placeholder: 'English' }
        ]
      },
      {
        id: 'localization',
        title: 'Digital Content Localization',
        description: 'Translates comics or memes.',
        template: "Translate the text in the speech bubbles/captions from [source_language] to [target_language]. Seamless Cleaning : Erase the original text and perfectly fill the background (e.g., the white speech bubble or the colored image background). Style Matching : Render the translated [target_language] text using a [font_style] that matches the aesthetic of the original image. Fit : Ensure the text fits naturally within the bubbles without overcrowding.",
        inputs: [
          { name: 'source_language', label: 'Source Language', type: 'text', placeholder: 'Japanese/English' },
          { name: 'target_language', label: 'Target Language', type: 'text', placeholder: 'Chinese' },
          { name: 'font_style', label: 'Font Style', type: 'text', placeholder: 'casual, handwritten-style font' }
        ]
      }
    ]
  },
  {
    id: 'social-networking',
    title: 'Social Networking & Avatars',
    description: 'Avatars and memes.',
    items: [
      {
        id: 'blind-box',
        title: '3D Blind Box Style Avatar',
        description: 'Cute, C4D-style "Pop Mart" characters.',
        template: "Transform the person in the uploaded photo into a cute 3D Pop Mart style blind box character. Likeness : Keep key features recognizable: [features]. Style : C4D rendering, occlusion render, cute Q-version, soft studio lighting, pastel colors. Background : [background]. Detail : The character should have a smooth, plastic toy texture with a slight glossy finish. Facing forward, friendly expression.",
        inputs: [
          { name: 'features', label: 'Features', type: 'text', placeholder: 'hair color, glasses, hairstyle' },
          { name: 'background', label: 'Background', type: 'text', placeholder: 'A simple, solid matte color background (e.g., soft blue)' }
        ]
      },
      {
        id: 'pet-meme',
        title: 'Pet Meme Creation',
        description: 'Minimalist, hand-drawn funny stickers.',
        template: "Turn this photo of my [pet] into a funny hand-drawn WeChat sticker. Style : Minimalist ugly-cute line drawing (doodle style). White background. Expression : Exaggerate the animal's expression to look [expression]. Accessories : Add cute little doodles like [doodles]. Text : Add handwritten text at the bottom: '[text]'. Ensure the text style is messy and funny.",
        inputs: [
          { name: 'pet', label: 'Pet', type: 'text', placeholder: 'cat/dog' },
          { name: 'expression', label: 'Expression', type: 'text', placeholder: 'extremely shocked/judgemental/lazy' },
          { name: 'doodles', label: 'Doodles', type: 'text', placeholder: 'sweat drops, question marks, or sparkles' },
          { name: 'text', label: 'Text', type: 'text', placeholder: 'So Dumb' }
        ]
      }
    ]
  },
  {
    id: 'new-additions',
    title: 'New Additions',
    description: 'Latest experimental prompts.',
    items: [
      {
        id: 'memory-palace',
        title: 'Memory Palace Learning',
        description: 'Detailed scene with labeled words.',
        template: "Create a detailed {{[scene]}} scene with English vocabulary labels for all objects. The format for labeling is: Line 1: English word, Line 2: IPA pronunciation, Line 3: Chinese translation",
        inputs: [
          { name: 'scene', label: 'Scene', type: 'text', placeholder: 'pet store' }
        ]
      },
      {
        id: 'googly-eyes',
        title: 'Googly Eyes and Stick Hands',
        description: 'Exaggerated comedic pose.',
        template: "Add illustrated googly eyes and stick hands on the ([subject]) in an exaggerated comedic pose",
        inputs: [
          { name: 'subject', label: 'Subject', type: 'text', placeholder: 'object/animal/ your bff' }
        ]
      },
      {
        id: 'cartoon-infographic',
        title: 'Cartoon-Style Infographic',
        description: 'Hand-drawn illustration style.',
        template: "--- Prompt ---\n\nPlease create a cartoon-style infographic based on the provided content, following these guidelines:\n\n- Hand-drawn illustration style, landscape orientation (16:9 aspect ratio).\n\n- Include a small number of simple cartoon elements, icons, or famous personalities to enhance visual interest and memorability.\n\n- If the content includes sensitive or copyrighted figures, replace them with visually similar alternatives; do not refuse to generate the illustration.\n\n- All imagery and text must strictly adhere to a hand-drawn style; avoid realistic visual elements.\n\n- Keep information concise, highlighting keywords and core concepts. Utilize ample whitespace to clearly emphasize key points.\n\n- Unless otherwise specified, use the same language as the provided content.\n\nPlease use nano banana pro to create the illustration based on the input provided.",
        inputs: []
      },
      {
        id: 'weather-card',
        title: 'Weather Card Generator',
        description: '3D isometric weather card.',
        template: "--- prompt ---\n\nPresent a clear, 45° top-down view of a vertical (9:16) isometric miniature 3D cartoon scene, highlighting iconic landmarks centered in the composition to showcase precise and delicate modeling.\n\nThe scene features soft, refined textures with realistic PBR materials and gentle, lifelike lighting and shadow effects. Weather elements are creatively integrated into the urban architecture, establishing a dynamic interaction between the city's landscape and atmospheric conditions, creating an immersive weather ambiance.\n\nUse a clean, unified composition with minimalistic aesthetics and a soft, solid-colored background that highlights the main content. The overall visual style is fresh and soothing.\n\nDisplay a prominent weather icon at the top-center, with the date (x-small text) and temperature range (medium text) beneath it. The city name (large text) is positioned directly above the weather icon. The weather information has no background and can subtly overlap with the buildings.\n\nThe text should match the input city's native language.\nPlease retrieve current weather conditions for the specified city before rendering.\n\nCity name:【[city]】",
        inputs: [
          { name: 'city', label: 'City Name', type: 'text', placeholder: 'New York' }
        ]
      }
    ]
  },
  {
    id: 'wallpapers',
    title: 'Wallpapers & Backgrounds',
    description: 'Aesthetic wallpapers for mobile and desktop.',
    items: [
      {
        id: 'animal-wallpaper',
        title: 'Cute Animal Wallpaper',
        description: 'Curious animals looking down at the screen.',
        template: "iphone wallpaper with 10 cute [animal_name] curiously looking down at the screen directly at the camera, camera pointing up at the sky --ar 9:16",
        inputs: [
          { name: 'animal_name', label: 'Animal Name', type: 'text', placeholder: 'cats' }
        ]
      }
    ]
  },
  {
    id: 'vintage-racing',
    title: 'Vintage Racing',
    description: 'Retro motorsport moments with analog aesthetics.',
    items: [
      {
        id: 'retro-gp',
        title: 'Retro Grand Prix',
        description: 'Cinematic vintage racing scenes.',
        template: "lively scene at the [gp_name] in the [year]. Iconic [car_type] cars racing through [track_description], engines roaring, vibrant crowd cheering from packed grandstands. Elegant spectators in vintage [year] fashion leaning over barriers to watch the action. [environment_description]. Sunlight reflecting on the cars’ polished bodies, heat haze rising from the asphalt, excitement in the air. Warm tones, moderate contrast, nostalgic atmosphere. Shot on Kodak Eastman 100T 5247, 35mm film look, fine analog grain, warm slightly faded colors, gentle contrast, soft nostalgic patina. Subtle scanlines, natural lens flares, light leaks, slight VHS cassette texture, authentic [year] analog imperfections. Cinematic, realistic, immersive mood. Designed for Instagram story format. --ar 9:16",
        inputs: [
          { name: 'gp_name', label: 'Grand Prix Name', type: 'text', placeholder: 'Monaco Grand Prix' },
          { name: 'year', label: 'Year', type: 'text', placeholder: '1980s' },
          { name: 'car_type', label: 'Car Type', type: 'text', placeholder: 'Formula 1' },
          { name: 'track_description', label: 'Track Description', type: 'text', placeholder: 'the narrow streets of Monte-Carlo' },
          { name: 'environment_description', label: 'Environment', type: 'textarea', placeholder: 'The harbor is filled with luxurious yachts, colorful flags fluttering in the warm Mediterranean breeze' }
        ]
      }
    ]
  }
];
