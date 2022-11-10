from socketserver import TCPServer, StreamRequestHandler

class TCPHandler(StreamRequestHandler):
    def handle(self):
        self.wfile.write(b'Ola, cliente\n')
        while True:
            data = self.rfile.readline().strip().decode("UTF-8")
            if not data:
                self.wfile.write(b'Cliente desconectado!\n')
                print("Otario desconectado!")
                break
            print(f"TCPHandler responde: {data}")



server_address = ("localhost", 8080)
with TCPServer(server_address, TCPHandler) as server:
    print("O Pai tá On c@r@lh*!!!")
    server.serve_forever()