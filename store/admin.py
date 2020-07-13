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
    list_display = ('product','quantity','get_customer', 'order',)

    def get_customer(self, obj):
        return obj.order.customer #.complete #.name

class ShippingAddressAdmin(admin.ModelAdmin):
    list_display = ('order','customer', 'phone', 'address','city', 'total', 'is_completed')

    def get_customer(self, obj):
        return obj.order.customer

    def is_completed(self, obj):
        return obj.order.complete
    
    def total(self, obj):
        return obj.order.get_cart_total

admin.site.register(Customer)
admin.site.register(Category)
admin.site.register(Product)
admin.site.register(Order,OrderAdmin)
admin.site.register(OrderItem, OrderItemAdmin)
admin.site.register(ShippingAddress,ShippingAddressAdmin)