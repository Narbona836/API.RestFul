// @ts-check
import { test, expect } from '@playwright/test';
import { DevicesPage } from '../pages/devicesPage';
import {
  deviceIds,
  googlePixel6Pro,
  smartphoneSamsung,
  smartphoneXiaomi,
} from './fixtures/devicePayloads';

test('Listar todos os Devices', async ({ request }) => {
  const devicesPage = new DevicesPage(request);

  const response = await devicesPage.listarDevices();

  console.log(await response.json());

  //expect(response.ok()).toBeTruthy();
  //expect(response.status()).toBe(200);
});

test('Pegar Device pelo Id', async ({ request }) => {
  const devicesPage = new DevicesPage(request);

  const response = await devicesPage.pegarDevicePorId(deviceIds.consulta);

  console.log(await response.json());

  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);
});

test('Consultar Device cadastrado com base no Id', async ({ request }) => {
  const devicesPage = new DevicesPage(request);

  const response = await devicesPage.pegarDevicePorId(googlePixel6Pro.id);
  const jsonBody = await response.json();

  console.log(jsonBody);

  expect(jsonBody.name).toBe(googlePixel6Pro.name);
  expect(jsonBody.data.color).toBe(googlePixel6Pro.color);
  expect(jsonBody.data.capacity).toBe(googlePixel6Pro.capacity);
});

test('Criar um Device', async ({ request }) => {
  const devicesPage = new DevicesPage(request);

  const response = await devicesPage.criarDevice(smartphoneXiaomi);

  console.log(await response.json());

  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);
});

test('Atualizar um Device', async ({ request }) => {
  const devicesPage = new DevicesPage(request);

  const response = await devicesPage.atualizarDevice(
    deviceIds.atualizacao,
    smartphoneSamsung,
  );

  console.log(await response.json());

  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);
});

test('Deletar um Device', async ({ request }) => {
  const devicesPage = new DevicesPage(request);

  const response = await devicesPage.deletarDevice(deviceIds.exclusao);

  console.log(await response.json());

  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);
});
