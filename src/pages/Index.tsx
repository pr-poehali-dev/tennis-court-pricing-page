import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const mainServices = [
    {
      title: "Аренда крытого корта для большого тенниса",
      price: "5000",
      unit: "руб/час",
      note: "Игровой час 55 минут",
      icon: "Trophy"
    },
    {
      title: "Аренда для игровых видов спорта",
      price: "12000",
      unit: "руб/час",
      note: "Игровой час 55 минут",
      icon: "Activity"
    }
  ];

  const equipment = [
    { name: "Аренда теннисной ракетки", price: "500", icon: "Zap" },
    { name: "Аренда корзины мячей", price: "1000", icon: "Circle" },
    { name: "Аренда полотенца", price: "200", icon: "Wind" }
  ];

  const additionalServices = [
    { name: "Дополнительный игрок", price: "1000" },
    { name: "Фиксированный взнос для тренера", price: "1000" },
    { name: "Аренда индивидуального шкафчика для хранения инвентаря", price: "5000", unit: "руб/мес" },
    { name: "Индивидуальная подготовка корта (вода в бутылках, 2-4 полотенца)", price: "1000" },
    { name: "Аренда шкафчика для НЕ клиентов клуба", price: "500", unit: "руб/3 часа", note: "В стоимость аренды входит шкафчик, душ. Аренда полотенец предоставляется за доп плату." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
            <Icon name="Trophy" size={40} className="text-primary" />
          </div>
          <h1 className="text-5xl font-bold text-slate-900 mb-4">Тарифы Клуба</h1>
          <p className="text-xl text-slate-600">Профессиональные условия для вашей игры</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {mainServices.map((service, index) => (
            <Card 
              key={index} 
              className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 bg-white animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name={service.icon} size={28} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{service.title}</h3>
                  {service.note && (
                    <Badge variant="secondary" className="text-xs">{service.note}</Badge>
                  )}
                </div>
              </div>
              <div className="flex items-end justify-between border-t pt-6">
                <div>
                  <div className="text-4xl font-bold text-primary">{service.price}</div>
                  <div className="text-slate-500 text-sm mt-1">{service.unit}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 mb-12 bg-white">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <Icon name="Package" size={28} className="text-primary" />
            Аренда инвентаря
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {equipment.map((item, index) => (
              <div 
                key={index} 
                className="p-6 rounded-xl border-2 border-slate-200 hover:border-primary/50 transition-all duration-300 hover:shadow-md"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name={item.icon} size={24} className="text-primary" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-3 text-sm leading-tight">{item.name}</h4>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-slate-900">{item.price}</span>
                  <span className="text-slate-500 text-sm">руб</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-8 bg-white">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <Icon name="Star" size={28} className="text-primary" />
            Дополнительные услуги
          </h2>
          <div className="space-y-4">
            {additionalServices.map((service, index) => (
              <div 
                key={index} 
                className="flex items-start justify-between p-5 rounded-lg hover:bg-slate-50 transition-colors border border-slate-100"
              >
                <div className="flex-1 pr-4">
                  <h4 className="font-medium text-slate-900 mb-1">{service.name}</h4>
                  {service.note && (
                    <p className="text-xs text-slate-500 mt-2">{service.note}</p>
                  )}
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="text-2xl font-bold text-slate-900">{service.price}</div>
                  <div className="text-sm text-slate-500">{service.unit || "руб"}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-8 mt-12 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
          <div className="flex items-start gap-4">
            <Icon name="Info" size={24} className="text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Аренда для проведения мероприятий</h3>
              <p className="text-slate-600">Цена по запросу. Свяжитесь с нами для получения индивидуального предложения.</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;
