export class DevicesPage {
  constructor(request) {
    this.request = request;
    this.basePath = '/objects';
  }

  async listarDevices() {
    return this.request.get(this.basePath);
  }

  async pegarDevicePorId(id) {
    return this.request.get(`${this.basePath}/${id}`);
  }

  async criarDevice(device) {
    return this.request.post(this.basePath, {
      data: device,
    });
  }

  async atualizarDevice(id, device) {
    return this.request.put(`${this.basePath}/${id}`, {
      data: device,
    });
  }

  async deletarDevice(id) {
    return this.request.delete(`${this.basePath}/${id}`);
  }
}
