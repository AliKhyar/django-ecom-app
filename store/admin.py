from django.contrib import admin

from .models import *


# class OrderInline(admin.TabularInline):
#     model = Order



class OrderAdmin(admin.ModelAdmin):
    # inlines = [
    #             OrderInline,
    #         ]
    
    list_display = ('id','customer','get_phone', 'date_ordered', 'complete')

    def get_phone(self, obj):
        return obj.customer.phone

class OrderItemAdmin(admin.ModelAdmin):
    list_display = ('product','order','quantity','get_customer', )

    def get_customer(self, obj):
        return obj.order #.complete #.name


admin.site.register(Customer)
admin.site.register(Category)
admin.site.register(Product)
admin.site.register(Order,OrderAdmin)
admin.site.register(OrderItem, OrderItemAdmin)
admin.site.register(ShippingAddress)