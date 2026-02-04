const products = [
  // --- BROTHER SCANNERS ---
  {
    name: "Brother ADS-3100",
    category: "Scanner",
    subCategory: "Document Scanner",
    price: 0, // Price not available in image
    description: "Scan speed up to 40ppm | Duplex scanning| 60 Sheet ADF |512MB|scan res 1200 x 1200 dpi|Scan file format JPEG, TIFF, & PDF|Daily duty cycle 6,000 pages|USB 3.0, USB host| Optimize workflows with Kofax, NewSoft and ScanEssentials software|Scan from your mobile device with Mobile Connect| Scan Long Paper 5000mm, Plastic card (1.32mm thickness), Paper Weight 25 - 413gsm",
    images: [
      "https://www.brother.ae/-/media/ap2/products/scanner/ads-3100/ads-3100_f.jpg?rev=b441fcb6d073491a8405b1767518477c"
    ],
    stock: 15,
  },
  {
    name: "Brother ADS-4300N",
    category: "Scanner",
    subCategory: "Document Scanner",
    price: 0,
    description: "Scan speed up to 40ppm | Duplex scanning| 80 Sheet ADF |512MB|scan res 1200 x 1200 dpi|Scan file format JPEG, TIFF, & PDF|Daily duty cycle 6,000 pages|USB 3.0, USB host, Network| Optimize workflows with Kofax, NewSoft and ScanEssentials software|Scan from your mobile device with Mobile Connect| Scan Long Paper 5000mm, Plastic card (1.32mm thickness), Paper Weight 25 - 413gsm",
    images: [
      "https://www.brother.ae/-/media/ap2/products/scanner/ads-4300n/ads-4300n_f.webp?rev=bf85adac01d7492d86754fa773c98217"
    ],
    stock: 15,
  },
  {
    name: "Brother ADS-4700W",
    category: "Scanner",
    subCategory: "Document Scanner",
    price: 0,
    description: "Scan speed up to 40ppm | Duplex scanning| 80 Sheet ADF |512MB|scan res 1200 x 1200 dpi|Scan file format JPEG, TIFF, & PDF|Daily duty cycle 6,000 pages|USB 3.0, USB host, Wi-Fi, Wi-Fi Direct and network| Optimize workflows with Kofax, NewSoft and ScanEssentials software| 10.9cm touchscreen| Scan from your mobile device with Mobile Connect| Scan Long Paper 5000mm, Plastic card (1.32mm thickness), Paper Weight 25 - 413gsm",
    images: [
      "https://www.brother.ae/-/media/ap2/products/scanner/ads-4700w/ads-4700w_f.webp?rev=2816093f1107479392d37f3737a38b7a"
    ],
    stock: 15,
  },
  {
    name: "Brother ADS-4900W",
    category: "Scanner",
    subCategory: "Document Scanner",
    price: 0,
    description: "Scan speed up to 60ppm | Duplex scanning| 100 Sheet ADF ||1024MB|scan res 1200 x 1200 dpi|Scan file format JPEG, TIFF, & PDF|Daily duty cycle 9,000 pages|USB 3.0, USB host, Wi-Fi, Wi-Fi Direct and network| Optimize workflows with Kofax, NewSoft and ScanEssentials software| 10.9cm touchscreen| Scan from your mobile device with Mobile Connect| Scan Long Paper 5000mm, Plastic card (1.32mm thickness), Paper Weight 25 - 413gsm",
    images: [
      "https://www.brother.ae/-/media/ap2/products/scanner/ads-4900w/ads-4900w_f.jpg?rev=e4281d58010a4f78a85bc4e8fd950d50"
    ],
    stock: 15,
  },

  // --- A4 INK TANK PRINTERS ---
  {
    name: "DCP-T230",
    category: "Printer",
    subCategory: "A4 Ink Tank Printer",
    price: 0,
    description: "A4 Ink Tank Printer with Print| Scan| Copy| 16/9ipm (mono/Colour)| 600 x 1,200dpi print resolution| 150 sheet input paper tray | Hi-speed USB 2.0| 64MB memory| 1 sheet by pass tray (up to 220 gsm paper)| 7,500 pages BK| 5000 pages Colour (CMY)|Borderless Printing | 1 Yr warranty RTB",
    images: ["https://www.brother.ae/-/media/ap2/global/products/dcp-t430w/ht3_cgimage_dcp_t430w_t435w_front.png?rev=c29d1baa08e344f68e49e38eb2c868d4"], // Link not visible in the image for this model
    stock: 15,
  },
  {
    name: "DCP-T430W",
    category: "Printer",
    subCategory: "A4 Ink Tank Printer",
    price: 0,
    description: "A4 Ink Tank Printer with Print| Scan| Copy| 16/9ipm (mono/Colour)| 600 x 1,200dpi print resolution| 150 sheet input paper tray | Hi-speed USB 2.0| 128MB memory| 1 sheet by pass tray (up to 300 gsm paper)| 7,500 pages BK| 5000 pages Colour (CMY)|Borderless Printing | 1 Yr warranty RTB",
    images: [
      "https://www.brother.ae/-/media/ap2/global/products/dcp-t430w/ht3_cgimage_dcp_t430w_t435w_front.png?rev=c29d1baa08e344f68e49e38eb2c868d4"
    ],
    stock: 15,
  },
  {
    name: "DCP-T530DW",
    category: "Printer",
    subCategory: "A4 Ink Tank Printer",
    price: 0,
    description: "A4 Ink Tank Printer with Print| Scan| Copy| 16/9ipm (mono/Colour)| Duplex Print| 600 x 1,200dpi print resolution| 150 sheet input paper tray | Hi-speed USB 2.0| 128MB memory | 1 sheet by pass tray (up to 300 gsm paper)| 7,500 pages BK| 5000 pages Colour (CMY)|Borderless Printing | 1 Yr warranty RTB",
    images: [
      "https://www.brother.ae/-/media/ap2/global/products/dcp-t530dw/ht5_cgimage_dcp_t530dw_t535dw_t580dw_mfc_t580dw_front.png?rev=087a1d5634314fc0a6affa1eb5dd0042"
    ],
    stock: 15,
  },
  {
    name: "DCP-T730DW",
    category: "Printer",
    subCategory: "A4 Ink Tank Printer",
    price: 0,
    description: "A4 Ink Tank Printer with Print| Scan| Copy| 17/9 ipm (mono/Colour)| 1,200 x 600dpi print resolution| DUPLEX PRINTING (COPY & SCAN IS SINGLE SIDED) | 150 sheet input paper tray | Hi-speed USB, Wireless| Wi-Fi Direct| 128MB memory| 1 sheet by pass tray (up to 300 gsm paper) | Mobile printing| 20 sheet ADF| Borderless Printing | 1 Yr warranty RTB. Supplied with 2 x BK Inks (15K pgs) & 1 x C/Y/M (5K Pgs each)",
    images: [
      "https://www.brother.ae/-/media/ap2/global/products/dcp-t730dw/ht7_cgimage_dcp_t730dw_t735dw_front.webp?rev=7b498c5c6b7940e4af9a8366976dc2d2"
    ],
    stock: 15,
  },
  {
    name: "DCP-T830DW",
    category: "Printer",
    subCategory: "A4 Ink Tank Printer",
    price: 0,
    description: "A4 Ink Tank Printer with Print| Scan| Copy| 17/16.5ipm (mono/Colour)| 1,200 x 600dpi print resolution| DUPLEX PRINTING (COPY & SCAN IS SINGLE SIDED) | 150 sheet input paper tray | Hi-speed USB, Wireless| Wi-Fi Direct| LAN | 128MB memory| 1 sheet by pass tray (up to 300 gsm paper) | Mobile printing| 20 sheet ADF| 80 Sheet MP Tray |Borderless Printing | 1 Yr warranty RTB. Supplied with 2 x BK Inks (15K pgs) & 1 x C/Y/M (5K Pgs each)",
    images: [
      "https://www.brother.ae/-/media/ap2/global/products/dcp-t830dw/ht1_cgimage_dcp_t830dw_front.png?rev=0c2c4f612eeb4940af972665d3c5f881"
    ],
    stock: 15,
  },
  {
    name: "MFC-T930DW",
    category: "Printer",
    subCategory: "A4 Ink Tank Printer",
    price: 0,
    description: "A4 Ink Tank Printer with Print| Scan| Copy| Fax| 17/16.5ipm (mono/Colour)| 600 x 1,200dpi print resolution| Duplex Print| 150 sheet input paper tray | 4.5 cm LCD display| Hi-speed USB, Wired, Wireless| Wi-Fi Direct| 128MB memory| 80 sheet paper MP Tray| Mobile printing| 20 sheet ADF| Supplied with 2 x BK Inks (15K pgs) & 1 x C/Y/M (5K Pgs each)",
    images: [
      "https://www.brother.ae/-/media/ap2/global/products/mfc-t930dw/ht2_cgimage_mfc_t930dw_t935dw_front.webp?rev=3071ba490afe4f068086b4c17afcd86d"
    ],
    stock: 15,
  },

  // --- A3 INK TANK PRINTERS ---
  {
    name: "MFC-T4500DW",
    category: "Printer",
    subCategory: "A3 Ink Tank Printer",
    price: 0,
    description: "A3 Inkjet printer with refill tank system| Print, Scan, Copy, Fax| 35/27ppm print speed| Duplex Print |Wired/Wireless |Wi-Fi Direct| 250 sheets Standard Tray | 100 sheets MP Tray | 50 sheets ADF| 128MB memory | 33.6Kbps Fax modem | 2.7''' TFT colour LCD | Mobile print | USB Direct print | Up to 6,500 pages BK (A4 pages), 5,000 pages CMY (A4 pages)",
    images: [
      "https://www.brother.ae/-/media/ap2/singapore/migration/microsite/solutionpages/mfc-t4500dw-f.jpg?rev=b78d165019d547a19eee9737d55b0bcd"
    ],
    stock: 15,
  },

  // --- A3 INK CARTRIDGE PRINTERS ---
  {
    name: "MFC-J2340DW",
    category: "Printer",
    subCategory: "A3 Ink Cartridge Printer",
    price: 0,
    description: "A3 Print|A4 Copy, Scan, Fax|28ipm print speed| 1,200 x 4,800 resolution|14.4Kbps fax modem| 250 sheet standard paper tray| 50 ADF|6.8cm touch panel 256MB memory|Hi-speed USB 2.0| Wired/Wireless LAN",
    images: [
      "https://www.brother.ae/-/media/ap2/gulf/products/mfc-j2340dw/20240722052103_mfc_j2340dw_f.webp?rev=f8758d58b94e409dbd8ffc215871ddc7"
    ],
    stock: 15,
  },
  {
    name: "MFC-J3540DW",
    category: "Printer",
    subCategory: "A3 Ink Cartridge Printer",
    price: 0,
    description: "A3 Print, Copy, Scan, Fax|28ipm print speed| 1,200 x 4,800 resolution|33.6Kbps modem speed| 250 sheet standard paper tray| 50 ADF|6.8cm touch panel256MB memory|Hi-speed USB 2.0| Wired/Wireless LAN|",
    images: [
      "https://www.brother.ae/-/media/ap2/products/printer/mfc-j3540dw/mfc_j3540dw_f.jpg?rev=022e0f040d204b188fe8086fa91e7931"
    ],
    stock: 15,
  },
  {
    name: "MFC-J3940DW",
    category: "Printer",
    subCategory: "A3 Ink Cartridge Printer",
    price: 0,
    description: "A3 Print, Copy, Scan, Fax|28ipm print speed| 1,200 x 4,800 resolution|33.6Kbps modem speed| 2 x 250 sheet standard paper tray| 50 ADF|6.8cm touch panel256MB memory|Hi-speed USB 2.0| Wired/Wireless LAN|2 trays x 250 sheet| Scan to email| Duplex scan",
    images: [
      "https://www.brother.ae/-/media/ap2/products/printer/mfc-j3940dw/mfc_j3940dw_f.jpg?rev=8b3200f900fd449f93d314cec8563e49"
    ],
    stock: 15,
  },
  // --- A4 MONO LASER MULTI FUNCTION PRINTERS ---
  {
    name: "Brother DCP-L2540DW",
    category: "Printer",
    subCategory: "Mono Laser Multi Function Printer",
    price: 0,
    description: "Mono Laser Multifunction A4 / Print, Copy,and Scan / Print Speed - 266Mhz up to 30ppm / Copy Speed - up to 30cpm / Scan Resolution - Up to 600*2,400dpi & 600*600dpi from (ADF) / Network / Wireless / Duplex / Input Tray - 250 sheets & Automatic Document Feeder - 35 sheets / 1 Y Warranty , Comes with Inbox toner of 2600 Pages",
    images: [
      "https://www.brother.ae/-/media/ap2/products/printer/dcp-l2540dw/printer-laser-dcp-l2540dw-f.webp?rev=524580b1e9fd4f13b3356812a72f0dc3"
    ],
    stock: 15,
  },
  {
    name: "Brother DCP-L5510DN",
    category: "Printer",
    subCategory: "Mono Laser Multi Function Printer",
    price: 0,
    description: "48 PPM,8.9cm Touch Screen, 1.2GHz. 512MB, PCL6, BR-Script3, IBM Proprinter XL, Epson FX-850, PDF Version 1.7, XPS Version 1.0, Direct Print/Scan via USB, Scan to email/USB, Maximum Monthly Up to 90,000 pages, Paper input 250 Sheets, Bypass 100 sheets, Auto Duplex, Single sided scanning, ADF 50 Sheets, Gigabit Ethernet, USB 2.0. INBOX TONER 6,000 PAGES",
    images: [
      "https://www.brother.ae/-/media/ap2/products/printer/dcp-l5510dn/dcp-l5510dn_f.jpg?rev=ed5b173bf058477a947ff94043fdf5c7"
    ],
    stock: 15,
  },
  {
    name: "Brother DCP-L5510DW",
    category: "Printer",
    subCategory: "Mono Laser Multi Function Printer",
    price: 0,
    description: "48 PPM, 8.9cm Touch Screen, 1.2GHz. 1GB, PCL6, BR-Script3, IBM Proprinter XL, Epson FX-850, PDF Version 1.7, XPS Version 1.0, Direct Print/Scan via USB, Scan to email/USB, Maximum Monthly Up to 90,000 pages, Paper input 250 Sheets, Bypass 100 sheets, Auto Duplex, Single sided scanning, ADF 50 Sheets, Gigabit Ethernet, USB 2.0, Wi-Fi. INBOX TONER 6,000 PAGES",
    images: [
      "https://www.brother.ae/-/media/ap2/products/printer/dcp-l5510dw/dcp-l5510dw_f.jpg?rev=f0318f6760b84f5c9938fb78ff4013bc"
    ],
    stock: 15,
  },
  {
    name: "Brother MFC-L5710DW",
    category: "Printer",
    subCategory: "Mono Laser Multi Function Printer",
    price: 0,
    description: "48 PPM, 8.9cm Touch Screen, 1.2GHz. 1GB, PCL6, BR-Script3, IBM Proprinter XL, Epson FX-850, PDF Version 1.7, XPS Version 1.0, Direct Print/Scan via USB, Scan to email/USB, Maximum Monthly Up to 90,000 pages, Paper input 250 Sheets, Bypass 100 sheets, Auto Duplex + Duplex Scanning, ADF 50 Sheets, Gigabit Ethernet, USB 2.0, Wi-Fi. INBOX TONER 6,000 PAGES",
    images: [
      "https://www.brother.ae/-/media/ap2/products/printer/mfc-l5710dw_black/mfc-l5710dw_b_f.webp?rev=ac4d40f15e604dfdb248ff5fb4bf548b"
    ],
    stock: 15,
  },
  {
    name: "Brother MFC-L6710DW",
    category: "Printer",
    subCategory: "Mono Laser Multi Function Printer",
    price: 0,
    description: "50PPM, 5\" TFT Touch screen, 1.2Ghz, Direct USB Print/Scan, Input 520 sheets (Exp to 1,560), Bypass 100 sheets, Auto Duplex Print and Scan, 2 BG memory, 70 Sheet 2-Sided Automatic Document Feeder (ADF), Scan to USB, E-mail, OCR, Image and File, Maximum Monthly Up to 125,000 pages, Gigabit Ethernet, USB 2.0, Wireless LAN, Wi-Fi direct. INBOX TONER 11,000 PAGES",
    images: [
      "https://www.brother.ae/-/media/ap2/products/printer/mfc-l6710dw/mfc-l6710dw_f.jpg?rev=146d9b8e795d46fd879b250012420eb8"
    ],
    stock: 15,
  },
  {
    name: "Brother MFC-L6910DN",
    category: "Printer",
    subCategory: "Mono Laser Multi Function Printer",
    price: 0,
    description: "50PPM, 5\" TFT Touch screen, 1.2Ghz, Direct USB Print/Scan, Input 520 sheets (Exp to 2,600), Bypass 100 sheets, Auto Duplex Print and Scan, 2 BG memory, 80 Sheet 2-Sided Automatic Document Feeder (ADF), NFC for secure authentication , Scan to USB, E-mail, OCR, Image and File, Maximum Monthly Up to 160,000 pages, Gigabit Ethernet, USB 2.0, Optional Wireless LAN, Wi-Fi direct. INBOX TONER 25,000 PAGES",
    images: [
      "https://www.brother.ae/-/media/ap2/gulf/products/mfc-l6910dn/20240416081549_mfc-l6910dn-printer-if-award.webp?rev=655d1e07177d48c19a54ad7a9da9651d"
    ],
    stock: 15,
  },

  // --- A4 COLOUR LASER MULTI FUNCTION PRINTERS ---
  {
    name: "Brother MFC-L3760CDW",
    category: "Printer",
    subCategory: "Colour Laser Multi Function Printer",
    price: 0,
    description: "Print, Scan, Copy, Fax| 26/27ppm print speed| 512MB memory| 800MHZ processor|3.5\" Touch screen Color LCD| Hi-speed USB 2.0| Wired/Wireless LAN |Wi-Fi Direct| Duplex Print/ Copy| 600 x 2,400dpi print resolution| 250 sheet paper tray| 50 sheets ADF| 1 manual-feed slot| 1,000 pages inbox toner| 30,000 pages duty cycle",
    images: [
      "https://www.brother.ae/-/media/ap2/products/printer/mfc-l3760cdw/mfc-l3760cdw_f.jpg?rev=336036bd5c194ffbaa07282a7b7d9b7e"
    ],
    stock: 15,
  },
  {
    name: "Brother MFC-L8690CDW",
    category: "Printer",
    subCategory: "Colour Laser Multi Function Printer",
    price: 0,
    description: "Print,Scan, Copy, Fax| 31/33ppm print speed| 1GB memory| 800MHZ processor|6.8cm Touch screen| Hi-speed USB 2.0| Wired/Wireless LAN| Gigabit Ethernet|56ipm duplex scan speed| 250 sheet paper tray| 50 sheets MP tray| 6,500 pages inbox toner| 40,000 pages duty cycle| Mobile print| Web connect",
    images: [
      "https://www.brother.ae/-/media/ap2/singapore/migration/microsite/solutionpages/printer-laser-mfc-l8690cdw-f.webp?rev=82ecb9b1b9c14a75b0db6d5f7f75cb39"
    ],
    stock: 15,
  },

  // --- LABEL PRINTERS ---
  {
    name: "Brother PT-H110",
    category: "Label Printer",
    subCategory: "Handheld Label Printer",
    price: 0,
    description: "Lightweight and portable,Easy-type QWERTY keyboard,Easy-view graphical display for easy preview before printing,One-touch keys for easy access to fonts, styles and frames,3 fonts, 14 frames and more than 250 symbols,Useful cable labeling feature to easily organize your wires and cables,Stores up to 15 labels for quick reprinting,Prints 1 or 2 lines of text on labels up to 12mm wide (approx. ½\"),Uses Brother \"TZe\" tapes in a variety of colors, sizes and types: standard, extra strength, acid free adhesive, cable and wire, fabric iron on and more,Flexible – Works with 6 x \"AAA\" batteries (not included) or optional AC adapter",
    images: [
      "https://www.brother.ae/-/media/ap2/gulf/products/labeller/pt-h110/pt-h110_label_printer.webp?rev=539cf21eef9849b3a021f14a36845beb"
    ],
    stock: 15,
  },
  {
    name: "Brother PT-D200AR",
    category: "Label Printer",
    subCategory: "Desktop Label Printer",
    price: 0,
    description: "Lightweight and portable,Easy-type QWERTY keyboard,Easy-view graphical display for easy preview before printing,One-touch keys for easy access to fonts, styles and frames,3 fonts, 14 frames and more than 250 symbols,Useful cable labeling feature to easily organize your wires and cables,Stores up to 15 labels for quick reprinting,Prints 1 or 2 lines of text on labels up to 12mm wide (approx. ½\"),Uses Brother \"TZe\" tapes in a variety of colors, sizes and types: standard, extra strength, acid free adhesive, cable and wire, fabric iron on and more,Flexible – Works with 6 x \"AAA\" batteries (not included) or optional AC adapter",
    images: [
      "https://www.brother.ae/-/media/ap2/products/labeller/pt-d200/label-printer-pt-d200-f.webp?rev=0a3a0564cab24b05adbf5748a7cb30ea"
    ],
    stock: 15,
  },
  {
    name: "Brother PT-E110VP",
    category: "Label Printer",
    subCategory: "Industrial Label Printer",
    price: 0,
    description: "Print Resolution - 180dpi / Print Speed - 20mm/sec / Tape Size - 6,9 and 12mm / Maximum Print Hight - 9mm / Built-in Frames - 1 / Built-in Fonts - 1 / Built-in Symbols - 168 / Specialist Labeling Functions - Cable wrap, Cable Flag, Face Plate & Serialize Print / Keyboard Type - ABCD.. / Cutter - Manual / Bar Code Support - No / LCD Display - 16 Characters * 1 Line / Print Preview Function - Yes / Batteries - 6 * AAA (LR030) Alkaline Batteries (Not supplied) / AC Adaptor - Included / Interface - None / OS Support - None / Unit Dimensions (mm) - 110(w)*207(h)*59(d) / Weight (Approx.) - 390g / Item Included - AC adaptor / 9mm black on white strong adhesive laminated tape 8m and user guide and Carrycase / Warranty - 1 Years",
    images: [
      "https://www.brother.ae/-/media/ap2/gulf/products/labeller/pt-e110/pt-e110_label_printer.jpg?rev=bbfe86c8b28c4283999ab8b88d7a8ac0"
    ],
    stock: 15,
  },
  {
    name: "Brother PT-D460BT (Bluetooth)",
    category: "Label Printer",
    subCategory: "Desktop Label Printer",
    price: 0,
    description: "Prints on 6mm,9mm,12mm & 18mm tapes/ Built in Keyboard/ Connects to PC using USB/ Large graphical display/ Store up to 70 labels for quick reprinting/ Includes tape cassette, AC adapter and USB cable/",
    images: [
      "https://www.brother.ae/-/media/ap2/products/labeller/pt-d460bt/pt-d460bt_f.jpg?rev=1517374cdb0343d2b4a20dfc33c684cd"
    ],
    stock: 15,
  },
  {
    name: "Brother PT-D610BT (Bluetooth)",
    category: "Label Printer",
    subCategory: "Desktop Label Printer",
    price: 0,
    description: "Print Resolution - 180dpi / Print Speed - 30mm/sec / Tape Size - 6,9,12 18 and 24mm / Maximum Print Hight - 15.8mm / Built-in-Frames - 99 / Built-in Fonts - 14 / Built-in Symbols - 617 / Specialist Labeling Functions - Cable wrap, Cable Flag, Face Plate, Patch Panel, Punch down Block & Serialize Print / Keyboard Type - QWERTY.. / Cutter - Auto / Bar Code Support - Yes PC Select / LCD Display - 20 Characters * 2 Line / Print Preview Function - Yes / Batteries - Rechargeable Battery Pack / 6 * AAA (LR030) Alkaline Batteries (Not supplied) / AC Adaptor - Included / Interface - USB / Unit Dimensions (mm) - 201(w)*192(h)*86(d) / Weight (Approx.) - 940g / Item Included - AC adaptor / 9mm black on white strong adhesive laminated tape 8m / Wrist Strap and user guide and Carrycase / Warranty - 1 Years",
    images: [
      "https://www.brother.ae/-/media/ap2/products/labeller/pt-d610bt/pt-d610bt_f.webp?rev=567ce8461bbf484685c2d6fea4a2dad3"
    ],
    stock: 15,
  },
  {
    name: "Brother PT-E310BTVP",
    category: "Label Printer",
    subCategory: "Industrial Label Printer",
    price: 0,
    description: "Print Resolution - 180dpi / Print Speed - 20mm/sec / Tape Size - 6,9,12 and 18mm / Maximum Print Hight - 15.8mm / Built-in Frames - 7 / Built-in Fonts - 7 / Built-in Symbols - 384 / Specialist Labeling Functions - Cable wrap, Cable Flag, Face Plate, Patch Panel, Punch down Block & Serialize Print / Keyboard Type - QWERTY.. / Cutter - Manual / Bar Code Support - Yes / LCD Display - 15 Characters * 3 Line / Print Preview Function - Yes / Batteries - Rechargeable Battery Pack Included / 6 * AAA (LR030) Alkaline Batteries (Not supplied) / AC Adaptor - Included / Interface - USB/ Blue Tooth / Item Included - AC adaptor / Wrist Strap and user guide and Carrycase / Warranty - 1Years",
    images: [
      "https://www.brother.ae/-/media/ap2/global/products/pt-e310btvp/pte310bt_f.png?rev=7834c028ea1b447abaf279ca26637b8e"
    ],
    stock: 15,
  },
  {
    name: "Brother PT-E560BTVP",
    category: "Label Printer",
    subCategory: "Industrial Label Printer",
    price: 0,
    description: "Industrial PC Labelling Machine (&Hse)with AC adapter & carry case with hand strap, lithium-ion battery and USB cable,Prints hard-wearing labels up to 24mm wide, Up to 30mm per second print speed + 7 lines of print,QWERTY style keyboard + 16 character, 3-line backlit LCD screen,Heat shrink tube labels compatible + 384 symbols available,Automatic (full and half) cutter- USB, WIFI, WIFI direct",
    images: [
      "https://www.brother.ae/-/media/ap2/global/products/pt-e560btvp/pte560bt_f.webp?rev=4230ecbe84d8448792838916257a6f9e"
    ],
    stock: 15,
  },
  {
    name: "Brother PT-P950NW",
    category: "Label Printer",
    subCategory: "Industrial Label Printer",
    price: 0,
    description: "Heavy duty label printer| 60,./sec print speed | 36mm Tze width| Wi-fi, Network and USB connectivity",
    images: [
      "https://www.brother.ae/-/media/ap2/singapore/migration/microsite/solutionpages/label-printer-pt-p950nw-f.webp?rev=628db60a6dcd4a90b157e3b5df82f43f"
    ],
    stock: 15,
  },
  {
    name: "Brother QL-800",
    category: "Label Printer",
    subCategory: "Professional Label Printer",
    price: 0,
    description: "Print Resolution - 300dpi / Print Speed - 93 standard label / min (150mm/sec) Role Tape Size - DK Rolls / Up to 62mm wide / Maximum Print Width - 59mm / Maximum Label Length -1m / Cutter - Durable Auto Cutter / AC Adapter - Internal Power Supply / Interface - USB 2.0 / Software - P-touch Editor 5, P-touch Editor Lite / Barcode Support - 19 Protocols in P-touch Editor 5 / Font Support - All Installed True Type Fonts / Front Styles 11 / Image Support - BMP, JPEG, PNG, TIF, GIF, DIB, WMF, EMF, ICO / Database Link - csv, txt, mdb, xls, SQL Server (With P-touch Editor 5) OS Support - Win XP , Vista, Win 7, Win 8 MAC OS 10.4.11-10.7 / Printing Command Unit Dimensions - Raster 128mm*221mm*153mm / Weight - 1.12 kg (Excluding DK Roll) / Warranty - 1 Years",
    images: [
      "https://www.brother.ae/-/media/ap2/products/labeller/ql-800/ql-800-f.webp?rev=573a0550d92843be9b6e5922e7d33a6b"
    ],
    stock: 15,
  },
  {
    name: "Brother QL-820NWB",
    category: "Label Printer",
    subCategory: "Professional Label Printer",
    price: 0,
    description: "Print Resolution - 300dpi / Print Speed - 93 standard label / min (150mm/sec) Role Tape Size - DK Rolls / Up to 62mm wide / Maximum Print Width - 59mm / Maximum Label Length -1m / Cutter - Durable Auto Cutter / AC Adapter - Internal Power Supply / Interface - 10/100 base TX Wired LAN, USB 3.0, ieee 802.11 b/g/n Wireless LAN / Software - P-touch Editor 5, P-touch Editor Lite LAN / Barcode Support - 19 Protocols in P-touch Editor 5 / Font Support - All Installed True Type Fonts / Front Styles 11 / Image Support - BMP, JPEG, PNG, TIF, GIF, DIB, WMF, EMF, ICO / Database Link - csv, txt, mdb, xls, SQL Server (With P-touch Editor 5) OS Support - Win XP SP3 or Higher, Vista, Win 7, Win 8, Server 2003, Server 2008, R2, MAC OS 10.4.11-10.7 / Printing Command Unit Dimensions - Raster - ESC/P, 128mm*236mm*153mm / Weight - 1.2 kg (Excluding DK Roll) / Warranty - 1 Years",
    images: [
      "https://www.brother.ae/-/media/ap2/singapore/migration/microsite/solutionpages/ql-820nw-f.webp?rev=de2f94e0c9284b51843afbc701c5fe0c"
    ],
    stock: 15,
  },
  // --- INK BOTTLES (Ink Tank Printers) ---
  {
    name: "Brother BTD60BK",
    category: "Ink Bottle",
    subCategory: "Pigment Black Ink",
    price: 0,
    description: "Approximate 7,500 A4 Pages (@5% Coverage A4) Pigment Black Ink Bottle (Except T300, T500W, T700W)",
    images: [
      "https://www.brother.ae/-/media/ap2/supplies/printing/ink-bottle/btd60bk.jpg?rev=c89d8a6282a244a49119bd1f049f7a16"
    ],
    stock: 15,
  },
  {
    name: "Brother BT-6000BK",
    category: "Ink Bottle",
    subCategory: "Dye Black Ink",
    price: 0,
    description: "Approximate 6,000 A4 Pages (@5% Coverage A4) Dye Black Ink Bottle for DCP-T300, DCP-T500W, DCP-T700W",
    images: [
      "https://www.brother.ae/-/media/ap2/supplies/printing/ink-bottle/inkjet-bottlebt6000bk.webp?rev=0c90b3fc9fd94ad3912184d11f274dea"
    ],
    stock: 15,
  },
  {
    name: "Brother BT-5000C",
    category: "Ink Bottle",
    subCategory: "Dye Cyan Ink",
    price: 0,
    description: "Approximate 5,000 A4 Pages (@5% Coverage A4) Dye Cyan Ink Bottle",
    images: [
      "https://www.brother.ae/-/media/ap2/supplies/printing/ink-bottle/bt5000c.jpg?rev=073cb6c112c948eba30614594d610676"
    ],
    stock: 15,
  },
  {
    name: "Brother BT-5000M",
    category: "Ink Bottle",
    subCategory: "Dye Magenta Ink",
    price: 0,
    description: "Approximate 5,000 A4 Pages (@5% Coverage A4) Dye Magenta Ink Bottle",
    images: [
      "https://www.brother.ae/-/media/ap2/supplies/printing/ink-bottle/bt5000m.jpg?rev=f2405cb3885d490ea83fc511af041946"
    ],
    stock: 15,
  },
  {
    name: "Brother BT-5000Y",
    category: "Ink Bottle",
    subCategory: "Dye Yellow Ink",
    price: 0,
    description: "Approximate 5,000 A4 Pages (@5% Coverage A4) Dye Yellow Ink Bottle",
    images: [
      "https://www.brother.ae/-/media/ap2/supplies/printing/ink-bottle/bt5000y.jpg?rev=1a6ea85f0770484c90a808bb0d93c6e3"
    ],
    stock: 15,
  },
  // New Ink Bottles for T430W/T530DW/T730DW/T830DW/T930DW
  {
    name: "Brother BTD100K",
    category: "Ink Bottle",
    subCategory: "Pigment Black Ink",
    price: 0,
    description: "Approximate 7,500 A4 Pages (@5% Coverage A4) Pigment Black Ink Bottle",
    images: [
      "https://www.brother.ae/-/media/ap2/global/products/btd100bk/002_btd100bk.webp?rev=c80cf72c41434d8c8797877336597356"
    ],
    stock: 15,
  },
  {
    name: "Brother BTD100C",
    category: "Ink Bottle",
    subCategory: "Dye Cyan Ink",
    price: 0,
    description: "Approximate 5,000 A4 Pages (@5% Coverage A4) Dye Cyan Ink Bottle",
    images: [
      "https://www.brother.ae/-/media/ap2/global/products/btd100c/006_btd100c.webp?rev=d8187886a2594cf089b19382ab7b01bb"
    ],
    stock: 15,
  },
  {
    name: "Brother BTD100M",
    category: "Ink Bottle",
    subCategory: "Dye Magenta Ink",
    price: 0,
    description: "Approximate 5,000 A4 Pages (@5% Coverage A4) Dye Cyan Ink Bottle", // Description copied from image text provided
    images: [
      "https://www.brother.ae/-/media/ap2/global/products/btd100m/010_btd100m.png?rev=24cbfe186ed34a03848cdc3d26d2c6b5"
    ],
    stock: 15,
  },
  {
    name: "Brother BTD100Y",
    category: "Ink Bottle",
    subCategory: "Dye Yellow Ink",
    price: 0,
    description: "Approximate 5,000 A4 Pages (@5% Coverage A4) Dye Cyan Ink Bottle", // Note: Image description says Cyan but model is Yellow, kept as per image text
    images: [
      "https://www.brother.ae/-/media/ap2/global/products/btd100y/014_btd100y.png?rev=111053bf248d4e7ea607278e1c0f2b1e"
    ],
    stock: 15,
  },

  // --- INK CARTRIDGES (Inkjet Printers) ---
  {
    name: "Brother LC3717BK",
    category: "Ink Cartridge",
    subCategory: "Standard Yield Ink",
    price: 0,
    description: "Ink Cartridge Black (550 A4 Pages) for MFC-J2330DW, MFC-J3530DW, MFC-J3930DW",
    images: [
      "https://www.brother.ae/-/media/ap2/supplies/printing/ink/lc3717bk.jpg?rev=89175dee85a54c33b81a456b8c80c4e0"
    ],
    stock: 15,
  },
  {
    name: "Brother LC3717C",
    category: "Ink Cartridge",
    subCategory: "Standard Yield Ink",
    price: 0,
    description: "Ink Cartridge Cyan (550 A4 Pages) for MFC-J2330DW, MFC-J3530DW, MFC-J3930DW",
    images: [
      "https://www.brother.ae/-/media/ap2/supplies/printing/ink/lc3717c.jpg?rev=3af724610a664e6281666081bad30bf0"
    ],
    stock: 15,
  },
  {
    name: "Brother LC3717M",
    category: "Ink Cartridge",
    subCategory: "Standard Yield Ink",
    price: 0,
    description: "Ink Cartridge Magenta (550 A4 Pages) for MFC-J2330DW, MFC-J3530DW, MFC-J3930DW",
    images: [
      "https://www.brother.ae/-/media/ap2/supplies/printing/ink/lc3717m.jpg?rev=af6d877337d14705a0ea1da2887f8d12"
    ],
    stock: 15,
  },
  {
    name: "Brother LC3717Y",
    category: "Ink Cartridge",
    subCategory: "Standard Yield Ink",
    price: 0,
    description: "Ink Cartridge Yellow (550 A4 Pages) for MFC-J2330DW, MFC-J3530DW, MFC-J3930DW",
    images: [
      "https://www.brother.ae/-/media/ap2/supplies/printing/ink/lc3717y.jpg?rev=5fd4b721b9624ff5ab6bddea6fb0ac6f"
    ],
    stock: 15,
  },
  {
    name: "Brother LC3719XLBK",
    category: "Ink Cartridge",
    subCategory: "High Capacity Ink",
    price: 0,
    description: "High Cap Ink Cartridge Black (3,000 A4 Pages) for MFC-J2330DW, MFC-J3530DW, MFC-J3930DW",
    images: [
      "https://www.brother.ae/-/media/ap2/supplies/printing/ink/lc3719xlbk.jpg?rev=9231b620768a4fcf973e6cea24d4b095"
    ],
    stock: 15,
  },
  {
    name: "Brother LC3719XLC",
    category: "Ink Cartridge",
    subCategory: "High Capacity Ink",
    price: 0,
    description: "High Cap Ink Cartridge Cyan (1500 A4 Pages) for MFC-J2330DW, MFC-J3530DW, MFC-J3930DW",
    images: [
      "https://www.brother.ae/-/media/ap2/supplies/printing/ink/lc3719xlc.jpg?rev=e977521e2196496790611e575faffcde"
    ],
    stock: 15,
  },
  {
    name: "Brother LC3719XLM",
    category: "Ink Cartridge",
    subCategory: "High Capacity Ink",
    price: 0,
    description: "High Cap Ink Cartridge Magenta (1500 A4 Pages) for MFC-J2330DW, MFC-J3530DW, MFC-J3930DW",
    images: [
      "https://www.brother.ae/-/media/ap2/supplies/printing/ink/lc3719xlm.jpg?rev=94d0c228bf2542fca3beb9805fabee31"
    ],
    stock: 15,
  },
  {
    name: "Brother LC3719XLY",
    category: "Ink Cartridge",
    subCategory: "High Capacity Ink",
    price: 0,
    description: "High Cap Ink Cartridge Yellow (1500 A4 Pages) for MFC-J2330DW, MFC-J3530DW, MFC-J3930DW",
    images: [
      "https://www.brother.ae/-/media/ap2/supplies/printing/ink/lc3719xly.jpg?rev=65b03480f271496ead506dfe1e2c6744"
    ],
    stock: 15,
  },
  // LC472 Series
  {
    name: "Brother LC472BK",
    category: "Ink Cartridge",
    subCategory: "Standard Yield Ink",
    price: 0,
    description: "Ink Cartridge Black (550 A4 Pages) for MFC-J2340DW, MFC-J3540DW, MFC-J3940DW",
    images: [
      "https://www.brother.ae/-/media/ap2/supplies/printing/ink/lc472bk.jpg?rev=a0f36670ff8c408b924dac194434580d"
    ],
    stock: 15,
  },
  {
    name: "Brother LC472C",
    category: "Ink Cartridge",
    subCategory: "Standard Yield Ink",
    price: 0,
    description: "Ink Cartridge Cyan (550 A4 Pages) for MFC-J2340DW, MFC-J3540DW, MFC-J3940DW",
    images: [
      "https://www.brother.ae/-/media/ap2/supplies/printing/ink/lc472c.jpg?rev=bfc524f044fa4da5bb2b54fb55cc8934"
    ],
    stock: 15,
  },
  {
    name: "Brother LC472M",
    category: "Ink Cartridge",
    subCategory: "Standard Yield Ink",
    price: 0,
    description: "Ink Cartridge Magenta (550 A4 Pages) for MFC-J2340DW, MFC-J3540DW, MFC-J3940DW",
    images: [
      "https://www.brother.ae/en/supplies/suppliehttps://www.brother.ae/-/media/ap2/supplies/printing/ink/lc472m.jpg?rev=09522b558d6d4839a69d3b955b40e20as-detail/lc472m"
    ],
    stock: 15,
  },
  {
    name: "Brother LC472Y",
    category: "Ink Cartridge",
    subCategory: "Standard Yield Ink",
    price: 0,
    description: "Ink Cartridge Yellow (550 A4 Pages) for MFC-J2340DW, MFC-J3540DW, MFC-J3940DW",
    images: [
      "https://www.brother.ae/-/media/ap2/supplies/printing/ink/lc472y.jpg?rev=11252c686d0244c98bdb4a264dc0c942"
    ],
    stock: 15,
  },
  {
    name: "Brother LC472XLBK",
    category: "Ink Cartridge",
    subCategory: "High Capacity Ink",
    price: 0,
    description: "High Cap Ink Cartridge Black (3,000 A4 Pages) for MFC-J2340DW, MFC-J3540DW, MFC-J3940DW",
    images: [
      "https://www.brother.ae/-/media/ap2/supplies/printing/ink/lc472xlbk.jpg?rev=ca9dea6684114626833f8c4d2c99328b"
    ],
    stock: 15,
  },
  {
    name: "Brother LC472XLC",
    category: "Ink Cartridge",
    subCategory: "High Capacity Ink",
    price: 0,
    description: "High Cap Ink Cartridge Cyan (1500 A4 Pages) for MFC-J2340DW, MFC-J3540DW, MFC-J3940DW",
    images: [
      "https://www.brother.ae/-/media/ap2/supplies/printing/ink/lc472xlc.jpg?rev=165892638b2740fa82e895e75636915c"
    ],
    stock: 15,
  },
  {
    name: "Brother LC472XLM",
    category: "Ink Cartridge",
    subCategory: "High Capacity Ink",
    price: 0,
    description: "High Cap Ink Cartridge Magenta (1500 A4 Pages) for MFC-J2340DW, MFC-J3540DW, MFC-J3940DW",
    images: [
      "https://www.brother.ae/-/media/ap2/supplies/printing/ink/lc472xlm.jpg?rev=822849d40f9447df8e893371fcf993f8"
    ],
    stock: 15,
  },
  {
    name: "Brother LC472XLY",
    category: "Ink Cartridge",
    subCategory: "High Capacity Ink",
    price: 0,
    description: "High Cap Ink Cartridge Yellow (1500 A4 Pages) for MFC-J2340DW, MFC-J3540DW, MFC-J3940DW",
    images: [
      "https://www.brother.ae/-/media/ap2/supplies/printing/ink/lc472xly.jpg?rev=fd20470477e840608b65129c9c9e8d2d"
    ],
    stock: 15,
  },

  // --- BLACK TONERS & DRUMS (Mono Printers) ---
  {
    name: "Brother TN-2305",
    category: "Toner Cartridge",
    subCategory: "Mono Toner",
    price: 0,
    description: "Toner (1,200 pages) for HL-L2360DN, HL-L2365DW, DCP-L2540DW, MFC-L2700D, MFC-L2700DW, MFC-L2740DW",
    images: [
      "https://www.brother.ae/-/media/ap2/supplies/printing/toner-and-drum/laser-drum-dll-tn2305.jpg?rev=a3a15a258b1449429746694ee38ccc00"
    ],
    stock: 15,
  },
  {
    name: "Brother TN-2355",
    category: "Toner Cartridge",
    subCategory: "Mono Toner",
    price: 0,
    description: "Toner (2,600 pages) for HL-L2360DN, HL-L2365DW, DCP-L2540DW, MFC-L2700D, MFC-L2700DW, MFC-L2740DW",
    images: [
      "https://www.brother.ae/en/supplies/supplies-detail/tn2355https://www.brother.ae/-/media/ap2/supplies/printing/toner-and-drum/laser-drum-dll-tn2355.webp?rev=e28bc112257549f2bfefe5da8f44ddd6"
    ],
    stock: 15,
  },
  {
    name: "Brother DR-2305",
    category: "Drum Unit",
    subCategory: "Mono Drum",
    price: 0,
    description: "Drum (12,000 pages) for HL-L2360DN, HL-L2365DW, DCP-L2540DW, MFC-L2700D, MFC-L2700DW, MFC-L2740DW",
    images: [
      "https://www.brother.ae/-/media/ap2/supplies/printing/toner-and-drum/dr-2305.jpg?rev=b838e1de06ad41dcb461580e1f92ac26"
    ],
    stock: 15,
  },
  {
    name: "Brother TN-3437",
    category: "Toner Cartridge",
    subCategory: "Mono Toner",
    price: 0,
    description: "8,000 Pages-HL-L5000D/HL-L5200DW/HL-L6200DW/HL-L6400DW/DCP-L5500D/MFC-L5755DW/MFC-L5900DW/MFC-L6900DW",
    images: [
      "https://www.brother.ae/-/media/ap2/supplies/printing/toner-and-drum/tn-3437.jpg?rev=a9a7a7ec19d442c5829d8bb4ea41a4d2"
    ],
    stock: 15,
  },
  {
    name: "Brother TN-3467",
    category: "Toner Cartridge",
    subCategory: "Mono Toner",
    price: 0,
    description: "12,000 Pages-HL-L5000D/HL-L5200DW/HL-L6200DW/HL-L6400DW/DCP-L5500D/MFC-L5755DW/MFC-L5900DW/MFC-L6900DW",
    images: [
      "https://www.brother.ae/-/media/ap2/supplies/printing/toner-and-drum/tn-3467.jpg?rev=39920d988ac74b03a232c0802a38815e"
    ],
    stock: 15,
  },
  {
    name: "Brother DR-3405",
    category: "Drum Unit",
    subCategory: "Mono Drum",
    price: 0,
    description: "50,000 Pages-HL-L5000D/HL-L5200DW/HL-L6200DW/HL-L6400DW/DCP-L5500D/MFC-L5755DW/MFC-L5900DW/MFC-L6900DW",
    images: [
      "https://www.brother.ae/-/media/ap2/supplies/printing/toner-and-drum/dr-3405.jpg?rev=4899ccb38c934714a1632413e33bfc90"
    ],
    stock: 15,
  },
  {
    name: "Brother TN3607",
    category: "Toner Cartridge",
    subCategory: "Mono Toner",
    price: 0,
    description: "3,000 Pages. HL-L5210DN, HL-L5210DW, HL-L6210DW, HL-L6410DN, DCP-L5510DN, DCP-L5510DW, MFC-L5710DW, MFC-L6710DW, MFC-L6910DN",
    images: [
      "https://www.brother.ae/-/media/ap2/supplies/printing/toner-and-drum/tn3607.jpg?rev=e2be7adf8a9940e69f8429af97a5a3f1"
    ],
    stock: 15,
  },
  {
    name: "Brother TN3607XXL",
    category: "Toner Cartridge",
    subCategory: "Mono Toner",
    price: 0,
    description: "11,000 Pages. HL-L5210DN, HL-L5210DW, HL-L6210DW, HL-L6410DN, DCP-L5510DN, DCP-L5510DW, MFC-L5710DW, MFC-L6710DW, MFC-L6910DN",
    images: [
      "https://www.brother.ae/-/media/ap2/supplies/printing/toner-and-drum/tn3607xxl.jpg?rev=9acfeabcfd7045e3bcf76b45bde38c58"
    ],
    stock: 15,
  },
  {
    name: "Brother TN3617",
    category: "Toner Cartridge",
    subCategory: "Mono Toner",
    price: 0,
    description: "18,000 Pages. HL-L5210DN, HL-L5210DW, HL-L6210DW, HL-L6410DN, DCP-L5510DN, DCP-L5510DW, MFC-L5710DW, MFC-L6710DW, MFC-L6910DN",
    images: [
      "https://www.brother.ae/-/media/ap2/supplies/printing/toner-and-drum/tn3617.jpg?rev=e07e80821cb24378a842f75641cd686a"
    ],
    stock: 15,
  },
  {
    name: "Brother TN3617XL",
    category: "Toner Cartridge",
    subCategory: "Mono Toner",
    price: 0,
    description: "25,000 Pages. HL-L6210DW, HL-L6410DN, MFC-L6710DW, MFC-L6910DN (25K Page toner only compatible with the 6XXX series)",
    images: [
      "https://www.brother.ae/-/media/ap2/supplies/printing/toner-and-drum/tn3617xl.jpg?rev=2af69075f861416dbb4fe7222bbe3127"
    ],
    stock: 15,
  },
  {
    name: "Brother DR3607",
    category: "Drum Unit",
    subCategory: "Mono Drum",
    price: 0,
    description: "75,000 Pages. HL-L5210DN, HL-L5210DW, HL-L6210DW, HL-L6410DN, DCP-L5510DN, DCP-L5510DW, MFC-L5710DW, MFC-L6710DW, MFC-L6910DN",
    images: [
      "https://www.brother.ae/-/media/ap2/supplies/printing/toner-and-drum/dr3607.webp?rev=016982ba6f8f4126b4ef9a3e817b45a1"
    ],
    stock: 15,
  },

  // --- TONERS & DRUMS FOR COLOUR PRINTERS ---
  {
    name: "Brother TN-273BK",
    category: "Toner Cartridge",
    subCategory: "Colour Toner",
    price: 0,
    description: "Black Standard toner – 1,400 pages for DCP-HL-L3210CW, DCP-L3551CDW and MFC-L3750CDW",
    images: [
      "https://www.brother.ae/-/media/ap2/supplies/printing/toner-and-drum/tn-273bk.jpg?rev=93fe1f55cfa44ab7ba8e291c74bd105d"
    ],
    stock: 15,
  },
  {
    name: "Brother TN-273C",
    category: "Toner Cartridge",
    subCategory: "Colour Toner",
    price: 0,
    description: "Cyan Standard toner – 1,300 pages for HL-L3210CW, DCP-L3551CDW and MFC-L3750CDW",
    images: [
      "https://www.brother.ae/-/media/ap2/supplies/printing/toner-and-drum/tn-273c.jpg?rev=2d5f06bea3d54da782094702c72d4c11"
    ],
    stock: 15,
  },
  {
    name: "Brother TN-273M",
    category: "Toner Cartridge",
    subCategory: "Colour Toner",
    price: 0,
    description: "Magenta Standard toner – 1,300 pages for HL-L3210CW, DCP-L3551CDW and MFC-L3750CDW",
    images: [
      "https://www.brother.ae/-/media/ap2/supplies/printing/toner-and-drum/tn-273m.jpg?rev=9ec1cb00bec647b6ac282cb7b8120264"
    ],
    stock: 15,
  },
  {
    name: "Brother TN-273Y",
    category: "Toner Cartridge",
    subCategory: "Colour Toner",
    price: 0,
    description: "Yellow Standard toner – 1,300 pages for HL-L3210CW, DCP-L3551CDW and MFC-L3750CDW",
    images: [
      "https://www.brother.ae/-/media/ap2/supplies/printing/toner-and-drum/tn-273y.jpg?rev=f8e9cbd98cca472bad5d30b01d7c83ba"
    ],
    stock: 15,
  },
  {
    name: "Brother TN-277BK",
    category: "Toner Cartridge",
    subCategory: "Colour Toner",
    price: 0,
    description: "Black Standard toner – 3,000 pages for DCP-HL-L3210CW, DCP-L3551CDW and MFC-L3750CDW",
    images: [
      "https://www.brother.ae/-/media/ap2/supplies/printing/toner-and-drum/tn-277bk.jpg?rev=20ff0c0d18b54765884449f222d725fd"
    ],
    stock: 15,
  },
  {
    name: "Brother TN-277C",
    category: "Toner Cartridge",
    subCategory: "Colour Toner",
    price: 0,
    description: "Cyan Standard toner – 2,300 pages for HL-L3210CW, DCP-L3551CDW and MFC-L3750CDW",
    images: [
      "https://www.brother.ae/-/media/ap2/supplies/printing/toner-and-drum/tn-277c.jpg?rev=44d15b1b76004d35a79769e82ee17d2b"
    ],
    stock: 15,
  },
  {
    name: "Brother TN-277M",
    category: "Toner Cartridge",
    subCategory: "Colour Toner",
    price: 0,
    description: "Magenta Standard toner – 2,300 pages for HL-L3210CW, DCP-L3551CDW and MFC-L3750CDW",
    images: [
      "https://www.brother.ae/-/media/ap2/supplies/printing/toner-and-drum/tn-277m.jpg?rev=385f9908f1ac46dd965007454788bc7a"
    ],
    stock: 15,
  },
  {
    name: "Brother TN-277Y",
    category: "Toner Cartridge",
    subCategory: "Colour Toner",
    price: 0,
    description: "Yellow Standard toner – 2,300 pages for HL-L3210CW, DCP-L3551CDW and MFC-L3750CDW",
    images: [
      "https://www.brother.ae/-/media/ap2/supplies/printing/toner-and-drum/tn-277y.jpg?rev=f34cc3f7546345989dcbf010c6bb2d54"
    ],
    stock: 15,
  },
  {
    name: "Brother DR-273CL",
    category: "Drum Unit",
    subCategory: "Colour Drum",
    price: 0,
    description: "4 Drums Bk/Cy/Yl/Mg- 18,000 Pages for HL-L3210CW, DCP-L3551CDW and MFC-L3750CDW",
    images: [
      "https://www.brother.ae/-/media/ap2/supplies/printing/toner-and-drum/dr-273cl.jpg?rev=fc71d5347b8342578035ab4b84d2a9d3"
    ],
    stock: 15,
  },
  // TN-279 Series
  {
    name: "Brother TN-279BK",
    category: "Toner Cartridge",
    subCategory: "Colour Toner",
    price: 0,
    description: "Black Standard toner – 1,500 pages for MFC-L3760CDW",
    images: [
      "https://www.brother.ae/-/media/ap2/supplies/printing/toner-and-drum/tn279bk.jpg?rev=ab572844da04446d85b02c9933f091b5"
    ],
    stock: 15,
  },
  {
    name: "Brother TN-279C",
    category: "Toner Cartridge",
    subCategory: "Colour Toner",
    price: 0,
    description: "Cyan Standard toner – 1,200 pages for MFC-L3760CDW",
    images: [
      "https://www.brother.ae/-/media/ap2/supplies/printing/toner-and-drum/tn279c.jpg?rev=a2010fdb335f40d5b69bf02dc8312de9"
    ],
    stock: 15,
  },
  {
    name: "Brother TN-279M",
    category: "Toner Cartridge",
    subCategory: "Colour Toner",
    price: 0,
    description: "Magenta Standard toner – 1,200 pages for MFC-L3760CDW",
    images: [
      "https://www.brother.ae/-/media/ap2/supplies/printing/toner-and-drum/tn279m.jpg?rev=0277bfc467a84873a612747117ed5ef1"
    ],
    stock: 15,
  },
  {
    name: "Brother TN-279Y",
    category: "Toner Cartridge",
    subCategory: "Colour Toner",
    price: 0,
    description: "Yellow toner – 1,200 pages for MFC-L3760CDW",
    images: [
      "https://www.brother.ae/-/media/ap2/supplies/printing/toner-and-drum/tn279y.jpg?rev=326df378715341aa875400b013b752ff"
    ],
    stock: 15,
  },
  {
    name: "Brother TN-279XLBK",
    category: "Toner Cartridge",
    subCategory: "High Capacity Colour Toner",
    price: 0,
    description: "Black High Cap toner – 3,000 pages for MFC-L3760CDW",
    images: [
      "https://www.brother.ae/-/media/ap2/supplies/printing/toner-and-drum/tn279xlbk.jpg?rev=a52062cbbebf4ad48a6e7dd580065a04"
    ],
    stock: 15,
  },
  {
    name: "Brother TN-279XLC",
    category: "Toner Cartridge",
    subCategory: "High Capacity Colour Toner",
    price: 0,
    description: "Cyan High Cap toner – 2,300 pages for MFC-L3760CDW",
    images: [
      "https://www.brother.ae/-/media/ap2/supplies/printing/toner-and-drum/tn279xlc.jpg?rev=75b612ebfbb2410ba5a56c2d23fc0f04"
    ],
    stock: 15,
  },
  {
    name: "Brother TN-279XLM",
    category: "Toner Cartridge",
    subCategory: "High Capacity Colour Toner",
    price: 0,
    description: "Magenta High Cap toner – 2,300 pages for MFC-L3760CDW",
    images: [
      "https://www.brother.ae/-/media/ap2/supplies/printing/toner-and-drum/tn279xlm.jpg?rev=e2afea526a3e4ccea6a59a5ebb0c3856"
    ],
    stock: 15,
  },
  {
    name: "Brother TN-279XLY",
    category: "Toner Cartridge",
    subCategory: "High Capacity Colour Toner",
    price: 0,
    description: "Yellow High Cap toner – 2,300 pages for MFC-L3760CDW",
    images: [
      "https://www.brother.ae/-/media/ap2/supplies/printing/toner-and-drum/tn279xly.jpg?rev=ff472ae2e9be44839856e36235aec9bc"
    ],
    stock: 15,
  },
  {
    name: "Brother DR-279CL",
    category: "Drum Unit",
    subCategory: "Colour Drum",
    price: 0,
    description: "4 Drums Bk/Cy/Yl/Mg- 20,000 Pages for MFC-L3760CDW",
    images: [
      "https://www.brother.ae/-/media/ap2/supplies/printing/toner-and-drum/dr279cl4pk.jpg?rev=5443d3f3e58d49f89f430a13933fe130"
    ],
    stock: 15,
  },
  // High Yield / Ultra High Yield
  {
    name: "Brother TN-466BK",
    category: "Toner Cartridge",
    subCategory: "Super High-Yield Toner",
    price: 0,
    description: "Super high-yield toner 6,500 pages- Black for MFC-L8690CDW & L9570CDW",
    images: [
      "https://www.brother.ae/-/media/ap2/supplies/printing/toner-and-drum/tn-466bk.jpg?rev=9958f88cdb0f492eb2687b7a0b160422"
    ],
    stock: 15,
  },
  {
    name: "Brother TN-466C",
    category: "Toner Cartridge",
    subCategory: "Super High-Yield Toner",
    price: 0,
    description: "Super high-yield toner 6,500 pages- Cyan forMFC-L8690CDW & L9570CDW",
    images: [
      "https://www.brother.ae/-/media/ap2/supplies/printing/toner-and-drum/tn-466c.jpg?rev=01218e7c1c4b4b4d87f7b1a5a517b7cf"
    ],
    stock: 15,
  },
  {
    name: "Brother TN-466M",
    category: "Toner Cartridge",
    subCategory: "Super High-Yield Toner",
    price: 0,
    description: "Super high-yield toner 6,500 pages-Magenta for MFC-L8690CDW & L9570CDW",
    images: [
      "https://www.brother.ae/-/media/ap2/supplies/printing/toner-and-drum/tn-466m.jpg?rev=236efcb77c064996bbccd77f3aeda2a3"
    ],
    stock: 15,
  },
  {
    name: "Brother TN-466Y",
    category: "Toner Cartridge",
    subCategory: "Super High-Yield Toner",
    price: 0,
    description: "Super high-yield toner 6,500 pages- Yellow for MFC-L8690CDW & L9570CDW",
    images: [
      "https://www.brother.ae/-/media/ap2/supplies/printing/toner-and-drum/tn-466y.jpg?rev=3c469a19ba444ce0863741a173c0f285"
    ],
    stock: 15,
  },
  {
    name: "Brother TN-469BK",
    category: "Toner Cartridge",
    subCategory: "Ultra High-Yield Toner",
    price: 0,
    description: "Ultra high-yield toner 9,000 pages- Black for MFC-L8690CDW & L9570CDW",
    images: [
      "https://www.brother.ae/-/media/ap2/supplies/printing/toner-and-drum/tn-469bk.jpg?rev=9d3c93d9295342599502251469363cac"
    ],
    stock: 15,
  },
  {
    name: "Brother TN-469C",
    category: "Toner Cartridge",
    subCategory: "Ultra High-Yield Toner",
    price: 0,
    description: "Ultra high-yield toner 9,000 pages- Cyan for MFC-L8690CDW & L9570CDW",
    images: [
      "https://www.brother.ae/-/media/ap2/supplies/printing/toner-and-drum/tn-469c.jpg?rev=d721373a8537416e819954348fc298d2"
    ],
    stock: 15,
  },
  {
    name: "Brother TN-469M",
    category: "Toner Cartridge",
    subCategory: "Ultra High-Yield Toner",
    price: 0,
    description: "Ultra high-yield toner 9,000 pages- Magenta for MFC-L8690CDW & L9570CDW",
    images: [
      "https://www.brother.ae/-/media/ap2/supplies/printing/toner-and-drum/tn-469m.jpg?rev=2e4b73ed163d4ecf87d10969344bf580"
    ],
    stock: 15,
  },
  {
    name: "Brother TN-469Y",
    category: "Toner Cartridge",
    subCategory: "Ultra High-Yield Toner",
    price: 0,
    description: "Ultra high-yield toner 9,000 pages- Yellow for MFC-L8690CDW & L9570CDW",
    images: [
      "https://www.brother.ae/-/media/ap2/supplies/printing/toner-and-drum/tn-469y.jpg?rev=f990f5809d86406891c0267ce6bbf888"
    ],
    stock: 15,
  },
  {
    name: "Brother DR-461CL",
    category: "Drum Unit",
    subCategory: "Colour Drum",
    price: 0,
    description: "Drum 50,000 pages for MFC-L8690CDW & L9570CDW",
    images: [
      "https://www.brother.ae/-/media/ap2/supplies/printing/toner-and-drum/dr-461cl.jpg?rev=2984848f0574478cbccb196597d2f592"
    ],
    stock: 15,
  },
  // --- TZe TAPES (Laminated Label Tapes) ---
  // 6mm Tapes
  {
    name: "Brother TZE-111",
    category: "Label Tape",
    subCategory: "TZe Tape (6mm)",
    price: 0,
    description: "6mm - Black on Clear tape for P-touch 8M",
    images: [
      "https://www.brother.ae/-/media/ap2/global/products/tze/resize-20241008/tze-111_pack_co.jpg?rev=600f5c81aef74b249a1df32e1753d35a"
    ],
    stock: 15,
  },
  {
    name: "Brother TZE-211",
    category: "Label Tape",
    subCategory: "TZe Tape (6mm)",
    price: 0,
    description: "6mm - Black on White tape for P-touch 8M",
    images: [
      "https://www.brother.ae/-/media/ap2/global/products/tze/resize-20241008/tze-211_pack_co.jpg?rev=5d8fa132ee0e402eb3c1cb465ae9530f"
    ],
    stock: 15,
  },
  {
    name: "Brother TZE-315",
    category: "Label Tape",
    subCategory: "TZe Tape (6mm)",
    price: 0,
    description: "6mm - White on Black tape for P-touch 8M",
    images: [
      "https://www.brother.ae/-/media/ap2/global/products/tze/resize-20241008/tze-315_pack_co.jpg?rev=b706f7f59f274751aa2ad3527c72a35d"
    ],
    stock: 15,
  },
  {
    name: "Brother TZE-611",
    category: "Label Tape",
    subCategory: "TZe Tape (6mm)",
    price: 0,
    description: "6mm - Black on Yellow tape for P-touch 8M",
    images: [
      "https://www.brother.ae/-/media/ap2/global/products/tze/resize-20241008/tze-611_pack_co.jpg?rev=0f2f93b2eea04401b956618946902754"
    ],
    stock: 15,
  },
  // 9mm Tapes
  {
    name: "Brother TZE-121",
    category: "Label Tape",
    subCategory: "TZe Tape (9mm)",
    price: 0,
    description: "9mm - Black on Clear tape for P-touch 8M",
    images: [
      "https://www.brother.ae/-/media/ap2/global/products/tze/resize-20241008/tze-121_pack_co.jpg?rev=c6ebc4205d0e469b8c4d6a7fd16ed320"
    ],
    stock: 15,
  },
  {
    name: "Brother TZE-221",
    category: "Label Tape",
    subCategory: "TZe Tape (9mm)",
    price: 0,
    description: "9mm - Black on White tape for P-touch 8M",
    images: [
      "https://www.brother.ae/-/media/ap2/global/products/tze/resize-20241008/tze-221_pack_co.webp?rev=4051608923b34dfa8240e40ca8d65dbe"
    ],
    stock: 15,
  },
  {
    name: "Brother TZE-222",
    category: "Label Tape",
    subCategory: "TZe Tape (9mm)",
    price: 0,
    description: "9mm - Red on White tape for P-touch 8M",
    images: [
      "https://www.brother.ae/-/media/ap2/global/products/tze/resize-20241008/tze-222_pack_co.webp?rev=074eac9cb85a488797ee70fa469e1533"
    ],
    stock: 15,
  },
  {
    name: "Brother TZE-223",
    category: "Label Tape",
    subCategory: "TZe Tape (9mm)",
    price: 0,
    description: "9mm - Blue on White tape for P-touch 8M",
    images: [
      "https://www.brother.ae/-/media/ap2/global/products/tze/resize-20241008/tze-223_pack_co.webp?rev=e98b3e0bde5a4f8ca3a4049db46460fc"
    ],
    stock: 15,
  },
  {
    name: "Brother TZE-325",
    category: "Label Tape",
    subCategory: "TZe Tape (9mm)",
    price: 0,
    description: "9mm - White on Black tape for P-touch 8M",
    images: [
      "https://www.brother.ae/-/media/ap2/global/products/tze/resize-20241008/tze-325_pack_co.jpg?rev=d2b9fdfaaf54444daf3c76e67b1508e0"
    ],
    stock: 15,
  },
  {
    name: "Brother TZE-421",
    category: "Label Tape",
    subCategory: "TZe Tape (9mm)",
    price: 0,
    description: "9mm - Black on Red tape for P-touch 8M",
    images: [
      "https://www.brother.ae/-/media/ap2/global/products/tze/resize-20241008/tze-421_pack_co.jpg?rev=72bb730c731e45b2aec8f7c9c3ede9f4"
    ],
    stock: 15,
  },
  {
    name: "Brother TZE-521",
    category: "Label Tape",
    subCategory: "TZe Tape (9mm)",
    price: 0,
    description: "9mm - Black on Blue tape for P-touch 8M",
    images: [
      "https://www.brother.ae/-/media/ap2/global/products/tze/resize-20241008/tze-521_pack_co.jpg?rev=e3c623952d0640268a09f51254ce1481"
    ],
    stock: 15,
  },
  {
    name: "Brother TZE-621",
    category: "Label Tape",
    subCategory: "TZe Tape (9mm)",
    price: 0,
    description: "9mm - Gloss Black on Yellow tape for P-touch 8M",
    images: [
      "https://www.brother.ae/-/media/ap2/global/products/tze/resize-20241008/tze-621_pack_co.jpg?rev=aa5967cb8df74520acd2557349447353"
    ],
    stock: 15,
  },
  {
    name: "Brother TZE-721",
    category: "Label Tape",
    subCategory: "TZe Tape (9mm)",
    price: 0,
    description: "9mm - Black on Green tape for P-touch 8M",
    images: [
      "https://www.brother.ae/-/media/ap2/global/products/tze/resize-20241008/tze-721_pack_co.jpg?rev=63cc85ed98f84798a1af2e2c8b988dcb"
    ],
    stock: 15,
  },
  // 12mm Tapes
  {
    name: "Brother TZE-131",
    category: "Label Tape",
    subCategory: "TZe Tape (12mm)",
    price: 0,
    description: "12mm - Black on Clear tape for P-touch 8M",
    images: [
      "https://www.brother.ae/-/media/ap2/global/products/tze/resize-20241008/tze-131_pack_co.jpg?rev=f4d06f93e26e4bd48cba7e679e35a4b9"
    ],
    stock: 15,
  },
  {
    name: "Brother TZE-132",
    category: "Label Tape",
    subCategory: "TZe Tape (12mm)",
    price: 0,
    description: "12mm - Red on Clear tape for P-touch 8M",
    images: [
      "https://www.brother.ae/-/media/ap2/global/products/tze/resize-20241008/tze-132_pack_co.webp?rev=4c4f04b0606b41c8bd3b4de360829106"
    ],
    stock: 15,
  },
  {
    name: "Brother TZE-431",
    category: "Label Tape",
    subCategory: "TZe Tape (12mm)",
    price: 0,
    description: "12mm - Black on Red tape for P-touch 8M",
    images: [
      "https://www.brother.ae/-/media/ap2/global/products/tze/resize-20241008/tze-431_pack_co.jpg?rev=bf9491cacafa4a3b961189ffb44e23d0"
    ],
    stock: 15,
  },
  {
    name: "Brother TZE-531",
    category: "Label Tape",
    subCategory: "TZe Tape (12mm)",
    price: 0,
    description: "12mm - Black on Blue tape for P-touch 8M",
    images: [
      "https://www.brother.ae/-/media/ap2/global/products/tze/resize-20241008/tze-531_pack_co.jpg?rev=7b05cd6116f94902b03e47c29be1781c"
    ],
    stock: 15,
  },
  {
    name: "Brother TZE-631",
    category: "Label Tape",
    subCategory: "TZe Tape (12mm)",
    price: 0,
    description: "12mm - Black on Yellow tape for P-touch 8M",
    images: [
      "https://www.brother.ae/-/media/ap2/global/products/tze/resize-20241008/tze-631_pack_co.webp?rev=18576e309c924fd2907ce8389b00842a"
    ],
    stock: 15,
  },
  {
    name: "Brother TZE-231",
    category: "Label Tape",
    subCategory: "TZe Tape (12mm)",
    price: 0,
    description: "12mm - Black on White tape for P-touch 8M",
    images: [
      "https://www.brother.ae/-/media/ap2/global/products/tze/resize-20241008/tze-231_pack_co.webp?rev=12b0088f5ea841149ab4535626c60d6d"
    ],
    stock: 15,
  },
  {
    name: "Brother TZE-335",
    category: "Label Tape",
    subCategory: "TZe Tape (12mm)",
    price: 0,
    description: "12mm - White on Black tape for P-touch 8M",
    images: [
      "https://www.brother.ae/-/media/ap2/global/products/tze/resize-20241008/tze-335_pack_co.jpg?rev=804e71c12e2e4bf3ab487ecae4e6ac6d"
    ],
    stock: 15,
  },
  {
    name: "Brother TZE-731",
    category: "Label Tape",
    subCategory: "TZe Tape (12mm)",
    price: 0,
    description: "12mm - Black on Green tape for P-touch 8M",
    images: [
      "https://www.brother.ae/-/media/ap2/global/products/tze/resize-20241008/tze-731_pack_co.jpg?rev=f6cecc84f61b4f61b90af640b90a35ba"
    ],
    stock: 15,
  },
  // 18mm Tapes
  {
    name: "Brother TZE-141",
    category: "Label Tape",
    subCategory: "TZe Tape (18mm)",
    price: 0,
    description: "18mm - Black on Clear tape for P-touch 8M",
    images: [
      "https://www.brother.ae/-/media/ap2/global/products/tze/resize-20241008/tze-141_pack_co.jpg?rev=b91254921a94451b860ab54237bb807e"
    ],
    stock: 15,
  },
  {
    name: "Brother TZE-241",
    category: "Label Tape",
    subCategory: "TZe Tape (18mm)",
    price: 0,
    description: "18mm - Black on White tape for P-touch 8M",
    images: [
      "https://www.brother.ae/-/media/ap2/global/products/tze/resize-20241008/tze-241_pack_co.jpg?rev=c76cef05d62245d0b95bc03b578cb38b"
    ],
    stock: 15,
  },
  {
    name: "Brother TZE-242",
    category: "Label Tape",
    subCategory: "TZe Tape (18mm)",
    price: 0,
    description: "18mm - Red on White tape for p-touch 8M",
    images: [
      "https://www.brother.ae/-/media/ap2/global/products/tze/resize-20241008/tze-242_pack_co.webp?rev=f3e7bfc4332241d19dc934b94664c818"
    ],
    stock: 15,
  },
  {
    name: "Brother TZE-243",
    category: "Label Tape",
    subCategory: "TZe Tape (18mm)",
    price: 0,
    description: "18mm - Blue on White tape for P-touch 8M",
    images: [
      "https://www.brother.ae/-/media/ap2/global/products/tze/resize-20241008/tze-243_pack_co.webp?rev=a552800857214721ac9d64b3418a9a64"
    ],
    stock: 15,
  },
  {
    name: "Brother TZE-441",
    category: "Label Tape",
    subCategory: "TZe Tape (18mm)",
    price: 0,
    description: "18mm - Blue on White tape for P-touch 8M",
    images: [
      "https://www.brother.ae/-/media/ap2/global/products/tze/resize-20241008/tze-441_pack_co.jpg?rev=c094751b3d184df098fa624137871dda"
    ],
    stock: 15,
  },
  {
    name: "Brother TZE-541",
    category: "Label Tape",
    subCategory: "TZe Tape (18mm)",
    price: 0,
    description: "18mm - Black on Blue tape for P-touch 8M",
    images: [
      "https://www.brother.ae/-/media/ap2/global/products/tze/resize-20241008/tze-541_pack_co.jpg?rev=29152be06f0544a0b2fcb90c262d58b0"
    ],
    stock: 15,
  },
  {
    name: "Brother TZE-641",
    category: "Label Tape",
    subCategory: "TZe Tape (18mm)",
    price: 0,
    description: "18mm - Black on Yellow tape for P-touch 8M",
    images: [
      "https://www.brother.ae/-/media/ap2/global/products/tze/resize-20241008/tze-641_pack_co.webp?rev=416d9fd2555f4d4fa54f1b32d154167c"
    ],
    stock: 15,
  },
  {
    name: "Brother TZE-741",
    category: "Label Tape",
    subCategory: "TZe Tape (18mm)",
    price: 0,
    description: "18mm- Black on Green tape for P-touch 8M",
    images: [
      "https://www.brother.ae/-/media/ap2/global/products/tze/resize-20241008/tze-641_pack_co.webp?rev=416d9fd2555f4d4fa54f1b32d154167c"
    ],
    stock: 15,
  },
  // 24mm Tapes
  {
    name: "Brother TZE-151",
    category: "Label Tape",
    subCategory: "TZe Tape (24mm)",
    price: 0,
    description: "24mm - Black on Clear tape for P-touch 8M",
    images: [
      "https://www.brother.ae/-/media/ap2/global/products/tze/resize-20241008/tze-641_pack_co.webp?rev=416d9fd2555f4d4fa54f1b32d154167c"
    ],
    stock: 15,
  },
  {
    name: "Brother TZE-251",
    category: "Label Tape",
    subCategory: "TZe Tape (24mm)",
    price: 0,
    description: "24mm - Black on White tape for P-touch 8M",
    images: [
      "https://www.brother.ae/-/media/ap2/global/products/tze/resize-20241008/tze-251_pack_co.jpg?rev=19b29b7a80d045cca5d175726e83840a"
    ],
    stock: 15,
  },
  {
    name: "Brother TZE-252",
    category: "Label Tape",
    subCategory: "TZe Tape (24mm)",
    price: 0,
    description: "24mm - Red on White tape for P-touch 8M",
    images: [
      "https://www.brother.ae/-/media/ap2/global/products/tze/resize-20241008/tze-252_pack_co.jpg?rev=9b39f1c1d12549db96fb9a3e597d9de4"
    ],
    stock: 15,
  },
  {
    name: "Brother TZE-253",
    category: "Label Tape",
    subCategory: "TZe Tape (24mm)",
    price: 0,
    description: "24mm - Blue on White tape for P-touch 8M",
    images: [
      "https://www.brother.ae/-/media/ap2/global/products/tze/resize-20241008/tze-253_pack_co.jpg?rev=15c255ed66a344479bbf56f479a489b5"
    ],
    stock: 15,
  },
  {
    name: "Brother TZE-451",
    category: "Label Tape",
    subCategory: "TZe Tape (24mm)",
    price: 0,
    description: "24mm - Black on Red tape for P-touch 8M",
    images: [
      "https://www.brother.ae/-/media/ap2/global/products/tze/resize-20241008/tze-451_pack_co.jpg?rev=b65e25f1789544cb9503a3c52fbfc345"
    ],
    stock: 15,
  },
  {
    name: "Brother TZE-551",
    category: "Label Tape",
    subCategory: "TZe Tape (24mm)",
    price: 0,
    description: "24mm - Black on Blue tape for P-touch 8M",
    images: [
      "https://www.brother.ae/-/media/ap2/global/products/tze/resize-20241008/tze-551_pack_co.jpg?rev=9e461aaf0c4a4ffa98f9330964fb13c1"
    ],
    stock: 15,
  },
  {
    name: "Brother TZE-555",
    category: "Label Tape",
    subCategory: "TZe Tape (24mm)",
    price: 0,
    description: "24mm - White on Blue tape for P-touch 8M",
    images: [
      "https://www.brother.ae/-/media/ap2/global/products/tze/resize-20241008/tze-555_pack_co.jpg?rev=d249d11edd494edd93a638989dde8871"
    ],
    stock: 15,
  },
  {
    name: "Brother TZE-651",
    category: "Label Tape",
    subCategory: "TZe Tape (24mm)",
    price: 0,
    description: "24mm - Black on Yellow tape for P-touch 8M",
    images: [
      "https://www.brother.ae/-/media/ap2/global/products/tze/resize-20241008/tze-651_pack_co.jpg?rev=cb37a9d49d42491786b5595c68b8a49b"
    ],
    stock: 15,
  },
  {
    name: "Brother TZE-751",
    category: "Label Tape",
    subCategory: "TZe Tape (24mm)",
    price: 0,
    description: "24mm - Black on Green tape for P-touch 8M",
    images: [
      "https://www.brother.ae/-/media/ap2/global/products/tze/resize-20241008/tze-751_pack_co.jpg?rev=b532335007dc43b1a6189d460b47221a"
    ],
    stock: 15,
  },
  // 36mm Tapes
  {
    name: "Brother TZE-161",
    category: "Label Tape",
    subCategory: "TZe Tape (36mm)",
    price: 0,
    description: "36mm - Black on Clear tape for P-touch 8M- tube printer compatible",
    images: [
      "https://www.brother.ae/-/media/ap2/global/products/tze/resize-20241008/tze-161_pack_co.jpg?rev=ba903469f1024d138f67e341fefdf47d"
    ],
    stock: 15,
  },
  {
    name: "Brother TZE-262",
    category: "Label Tape",
    subCategory: "TZe Tape (36mm)",
    price: 0,
    description: "36mm - Red on White tape for P-touch 8M- tube printer compatible",
    images: [
      "https://www.brother.ae/-/media/ap2/supplies/labelling/label/p-touch-tape-cassette-tze-262.jpg?rev=0324bd2b9fac420fb37a0c2544cc4939"
    ],
    stock: 15,
  },
  {
    name: "Brother TZE-461",
    category: "Label Tape",
    subCategory: "TZe Tape (36mm)",
    price: 0,
    description: "36mm - Black on Red tape for P-touch 8M- tube printer compatible",
    images: [
      "https://www.brother.ae/-/media/ap2/global/products/tze/resize-20241008/tze-461_pack_co.jpg?rev=045e89ab749b438b86aa3db495d92910"
    ],
    stock: 15,
  },
  {
    name: "Brother TZE-561",
    category: "Label Tape",
    subCategory: "TZe Tape (36mm)",
    price: 0,
    description: "36mm - Black on Red tape for P-touch 8M -tube printer compatible",
    images: [
      "https://www.brother.ae/-/media/ap2/global/products/tze/resize-20241008/tze-561_pack_co.jpg?rev=9f6a8e550a444354bc804cc4741e58d0"
    ],
    stock: 15,
  },
  {
    name: "Brother TZE-661",
    category: "Label Tape",
    subCategory: "TZe Tape (36mm)",
    price: 0,
    description: "36mm - Black on Yellow tape for P-touch 8M- tube printer compatible",
    images: [
      "https://www.brother.ae/-/media/ap2/global/products/tze/resize-20241008/tze-661_pack_co.jpg?rev=35b9e49fcee946b9b2ce16bf8c7d3c9a"
    ],
    stock: 15,
  },

  // --- DK ROLLS (Labels for QL Series) ---
  {
    name: "Brother DK-11208",
    category: "Label Roll",
    subCategory: "DK Address Label",
    price: 0,
    description: "Black on White Large Address Paper tape, Tape Size 38mm x 90mm; 400 cut labels per roll",
    images: [
      "https://www.brother.ae/-/media/ap2/supplies/labelling/label/ql-large-address-label-dk-11208.jpg?rev=b9fbf7f89f154d9fbd19109e5f26eb3c"
    ],
    stock: 15,
  },
  {
    name: "Brother DK-11209",
    category: "Label Roll",
    subCategory: "DK Address Label",
    price: 0,
    description: "Black on White Small Address Paper tape, Tape Size 29mm x 62mm; 800 cut labels per roll",
    images: [
      "https://www.brother.ae/-/media/ap2/supplies/labelling/label/ql-small-address-label-dk-11209.jpg?rev=bb3daeda044446c2b81f140026b55f8a"
    ],
    stock: 15,
  },
  {
    name: "Brother DK-22205",
    category: "Label Roll",
    subCategory: "DK Continuous Tape",
    price: 0,
    description: "Black on White Continuous Length Paper Tape, Tape size is 62mm x 30.48m",
    images: [
      "https://www.brother.ae/-/media/ap2/supplies/labelling/label/ql-continuous-length-film-tape-dk-22205.jpg?rev=0e837f3753d047449b962fff2bfc3aa2"
    ],
    stock: 15,
  },
  {
    name: "Brother DK-22210",
    category: "Label Roll",
    subCategory: "DK Continuous Tape",
    price: 0,
    description: "Black on White Continuous Length Paper Tape, Tape size is 29mm x 30.48m",
    images: [
      "https://www.brother.ae/-/media/ap2/supplies/labelling/label/ql-continuous-length-paper-tape-dk-22210.jpg?rev=a6b53cc894274776bb14881612b22043"
    ],
    stock: 15,
  },
  {
    name: "Brother DK-22214",
    category: "Label Roll",
    subCategory: "DK Continuous Tape",
    price: 0,
    description: "Black on White Continuous Narrow Length Paper Tape, Tape size is 12mm x 30.48m New",
    images: [
      "https://www.brother.ae/-/media/ap2/supplies/labelling/label/ql-continuous-length-paper-tape-dk-22214.jpg?rev=fc1577b1986c49c29dc245fdc456f48a"
    ],
    stock: 15,
  },
  {
    name: "Brother DK-11201",
    category: "Label Roll",
    subCategory: "DK Address Label",
    price: 0,
    description: "Black on standard address labels, tape size is 29mm x90mm: 400 cut labels per roll New",
    images: [
      "https://www.brother.ae/-/media/ap2/supplies/labelling/label/ql-standard-address-label-dk-11201.jpg?rev=9aa4d6a96ada40e2b169743a27b30e93"
    ],
    stock: 15,
  },
  {
    name: "Brother DK-22223",
    category: "Label Roll",
    subCategory: "DK Continuous Tape",
    price: 0,
    description: "Black on White Continuous Length Paper Tape, Tape size is 50mm x 30.48m",
    images: [
      "https://www.brother.ae/-/media/ap2/supplies/labelling/label/dk22223_main.webp?rev=074ff0bde78e4b25827692633b28d1e8"
    ],
    stock: 15,
  },
  {
    name: "Brother DK-22251",
    category: "Label Roll",
    subCategory: "DK Continuous Tape (2 Colour)",
    price: 0,
    description: "DK roll 30M 2 colors (Black and Red), Tape size is 62mm x 15.00m",
    images: [
      "https://www.brother.ae/-/media/ap2/supplies/labelling/label/dk-22251.webp?rev=ef0a2b64100d41068dfe8df87a34563f"
    ],
    stock: 15,
  },
];

export default products;