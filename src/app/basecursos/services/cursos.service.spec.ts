import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CursosService } from './cursos.service';
import { of } from 'rxjs';

describe('CursosService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let cursos: CursosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    cursos = new CursosService(httpClientSpy as any);
  });

  it('El servicio se instancia correctamente', () => {
    expect(cursos).toBeTruthy();
  });

  it('El servicio retorna un arreglo de cursos mockeados', (done: DoneFn) => {
    const mockDatosCur = [
      {
        nombre: 'auxiliary',
        comision: '53540-4835',
        profesor: 'Derek',
        apellidoProfesor: 'Bosco',
        fechaComienzo: '2022-10-30T07:14:47.870Z',
        fechaFin: '2022-11-01T00:44:37.636Z',
        inscripcionAbierta: false,
        imagen:
          'https://res.cloudinary.com/hdsqazxtw/image/upload/v1600707758/coderhouse-logo.png',
        id: '1',
      },
      {
        nombre: 'optical',
        comision: '56155',
        profesor: 'Jennings',
        apellidoProfesor: 'Langworth',
        fechaComienzo: '2022-10-30T14:15:25.660Z',
        fechaFin: '2022-10-31T11:04:22.502Z',
        inscripcionAbierta: false,
        imagen:
          'https://res.cloudinary.com/hdsqazxtw/image/upload/v1600707758/coderhouse-logo.png',
        id: '2',
      },
      {
        nombre: 'multi-byte',
        comision: '09279',
        profesor: 'Hermina',
        apellidoProfesor: 'Balistreri',
        fechaComienzo: '2022-10-30T13:16:59.859Z',
        fechaFin: '2022-10-31T19:56:35.169Z',
        inscripcionAbierta: false,
        imagen:
          'https://res.cloudinary.com/hdsqazxtw/image/upload/v1600707758/coderhouse-logo.png',
        id: '3',
      },
      {
        nombre: 'redundant',
        comision: '69356',
        profesor: 'Gonzalo',
        apellidoProfesor: 'Howe',
        fechaComienzo: '2022-10-30T06:32:53.727Z',
        fechaFin: '2022-10-31T08:11:30.249Z',
        inscripcionAbierta: false,
        imagen:
          'https://res.cloudinary.com/hdsqazxtw/image/upload/v1600707758/coderhouse-logo.png',
        id: '4',
      },
      {
        nombre: 'auxiliary',
        comision: '33991-5630',
        profesor: 'Ford',
        apellidoProfesor: 'Spencer',
        fechaComienzo: '2022-10-30T19:41:37.857Z',
        fechaFin: '2022-10-31T04:25:04.364Z',
        inscripcionAbierta: false,
        imagen:
          'https://res.cloudinary.com/hdsqazxtw/image/upload/v1600707758/coderhouse-logo.png',
        id: '5',
      },
      {
        nombre: 'VueJS',
        comision: '32432',
        profesor: 'Ulises',
        apellidoProfesor: 'ascanio',
        fechaComienzo: '2022-10-31T03:00:00.000Z',
        fechaFin: '2022-11-25T03:00:00.000Z',
        inscripcionAbierta: true,
        imagen:
          'https://res.cloudinary.com/hdsqazxtw/image/upload/v1600707758/coderhouse-logo.png',
        id: '6',
      },
    ];

    httpClientSpy.get.and.returnValue(of(mockDatosCur));

    cursos.obtenerCursoTest().subscribe((cursos) => {
      const mockDatosCur2 = [
        {
          nombre: 'auxiliary',
          comision: '53540-4835',
          profesor: 'Derek',
          apellidoProfesor: 'Bosco',
          fechaComienzo: '2022-10-30T07:14:47.870Z',
          fechaFin: '2022-11-01T00:44:37.636Z',
          inscripcionAbierta: false,
          imagen:
            'https://res.cloudinary.com/hdsqazxtw/image/upload/v1600707758/coderhouse-logo.png',
          id: '1',
        },
        {
          nombre: 'optical',
          comision: '56155',
          profesor: 'Jennings',
          apellidoProfesor: 'Langworth',
          fechaComienzo: '2022-10-30T14:15:25.660Z',
          fechaFin: '2022-10-31T11:04:22.502Z',
          inscripcionAbierta: false,
          imagen:
            'https://res.cloudinary.com/hdsqazxtw/image/upload/v1600707758/coderhouse-logo.png',
          id: '2',
        },
        {
          nombre: 'multi-byte',
          comision: '09279',
          profesor: 'Hermina',
          apellidoProfesor: 'Balistreri',
          fechaComienzo: '2022-10-30T13:16:59.859Z',
          fechaFin: '2022-10-31T19:56:35.169Z',
          inscripcionAbierta: false,
          imagen:
            'https://res.cloudinary.com/hdsqazxtw/image/upload/v1600707758/coderhouse-logo.png',
          id: '3',
        },
        {
          nombre: 'redundant',
          comision: '69356',
          profesor: 'Gonzalo',
          apellidoProfesor: 'Howe',
          fechaComienzo: '2022-10-30T06:32:53.727Z',
          fechaFin: '2022-10-31T08:11:30.249Z',
          inscripcionAbierta: false,
          imagen:
            'https://res.cloudinary.com/hdsqazxtw/image/upload/v1600707758/coderhouse-logo.png',
          id: '4',
        },
        {
          nombre: 'auxiliary',
          comision: '33991-5630',
          profesor: 'Ford',
          apellidoProfesor: 'Spencer',
          fechaComienzo: '2022-10-30T19:41:37.857Z',
          fechaFin: '2022-10-31T04:25:04.364Z',
          inscripcionAbierta: false,
          imagen:
            'https://res.cloudinary.com/hdsqazxtw/image/upload/v1600707758/coderhouse-logo.png',
          id: '5',
        },
        {
          nombre: 'VueJS',
          comision: '32432',
          profesor: 'Ulises',
          apellidoProfesor: 'ascanio',
          fechaComienzo: '2022-10-31T03:00:00.000Z',
          fechaFin: '2022-11-25T03:00:00.000Z',
          inscripcionAbierta: true,
          imagen:
            'https://res.cloudinary.com/hdsqazxtw/image/upload/v1600707758/coderhouse-logo.png',
          id: '6',
        },
      ];
      expect(cursos).toEqual(mockDatosCur2);
      done();
    });
  });
});
