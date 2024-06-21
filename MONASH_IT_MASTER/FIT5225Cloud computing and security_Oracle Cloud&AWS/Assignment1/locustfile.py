from locust import HttpUser, task, between

class HelloWorldUser(HttpUser):
    wait_time = between(5, 10)

    @task
    def hello_world(self):
        import os
        folder_path = "./images/inputfolder/"
        files = os.listdir(folder_path)
        for file in files:
            import uuid
            # Generate UUID
            id = str(uuid.uuid4())
            base64_image = self.read_img_base64(folder_path + file)
            res = self.client.post("/api/transfer", json={"id": id, "image": base64_image})
            print(res.text)

    def read_img_base64(self, image):
        import base64
        # Read the image file
        with open(image, 'rb') as image_file:
            # Convert the image file content to base64 format
            base64_image = base64.b64encode(image_file.read()).decode('utf-8')
        return base64_image