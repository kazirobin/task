## 🏢 Company / Office Space

1. In the **Add Office Space** section, the country field should be selectable to improve the UI/UX when creating a new office space.  
2. When clicking the decrement (down arrow) on **Price, Area, Capacity, Meeting Rooms, Parking Spaces, Floor, Total Floors**, the value goes below 0. It must be restricted to **not go below 0**.  
3. Drag-and-drop image upload is not working — images fail to upload.  
4. The **Add Office Space** submit button is functioning correctly.  
5. Office spaces are successfully displayed on the main website.  

---

## 🏗️ Construction & Building Materials

1. When clicking the decrement (down arrow) on **Price** and **Minimum Order Quantity**, the value goes below 0. It must be restricted to **not go below 0**.  
2. Drag-and-drop image upload is not working.  
3. After submitting the form, the following console error appears:

Error saving construction material: Error: Failed to save construction material (index-DeHeQErG.js:785)

**Meaning:** The system is unable to save construction material data to the database/backend, causing the creation process to fail.

4. The **Construction & Building Materials** section is still not displaying due to errors.

---

## 🏭 Factory Industrial Land

1. When clicking the decrement (down arrow) on **Price** and **Area**, the value goes below 0. It must be restricted to **not go below 0**.  
2. Drag-and-drop image upload is not working.  
3. Factory Industrial Land items are successfully displayed on the main website.  

---

## 🏨 Hostels & PG

1. When clicking the decrement (down arrow) on **Price Per Month, Total Beds, Available Beds**, the value goes below 0. It must be restricted to **not go below 0**.  
2. The **Contact Phone** field should accept **numbers only**. Currently, alphabets can be entered — input validation is required.  
3. Drag-and-drop image upload is not working.  
4. After form submission, the following console error appears:

Error saving hostel/PG: Error: Base64 (data:) media is not allowed in request body. Upload the file to /api/upload (or /api/upload-multiple) and store only the returned /uploads/... URL in the database. (index-DeHeQErG.js:785)

**Meaning:** The system is sending images as Base64 in the request body, which is not allowed. Images must first be uploaded to the server, and only the returned URL should be saved in the database.

5. The **Hostels & PG** section is still not displaying due to errors.

---

## 🏪 Local Market Commercial Properties

1. When clicking the decrement (down arrow) on **Price** and **Area (sq.ft)**, the value goes below 0. It must be restricted to **not go below 0**.  
2. Drag-and-drop image upload is not working.  
3. Local Market Commercial Properties are successfully displayed on the main website.  

---

## 🏠 Property Deals (Buy/Sell)

1. When clicking the decrement (down arrow) on **Price, Area, Bedrooms, Bathrooms, Floors**, the value goes below 0. It must be restricted to **not go below 0**.  
2. After submitting the form, the following error appears:

POST https://jeevika.live/api/admin/property-deals 400 (Bad Request)

**Meaning:** The request was rejected by the server due to missing, invalid, or incorrectly formatted data.

3. The **Property Deals (Buy/Sell)** section is still not displaying due to errors. 
