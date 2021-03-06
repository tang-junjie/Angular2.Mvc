﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;

namespace Angular2.Mvc.Service.Factory
{
    /// <summary>
    /// Automapping to DTO factory
    /// </summary>
    public static class ViewModelFactory
    {
        private  static MapperConfiguration _mapCfg = null;
        private static IMapper _mapper = null;
        static ViewModelFactory()
        {
             _mapCfg = new MapperConfiguration(cfg => {
                 cfg.CreateMap<Angular2.Mvc.DAL.Models.DAO.Customer, Angular2.Mvc.Core.Models.ViewModel.VmCustomer>();

             });

            _mapper= _mapCfg.CreateMapper();
        }


        /// <summary>
        /// Create DTO (K) from object T
        /// </summary>
        /// <param name="src">T</param>
        /// <returns>K</returns>
        public static K Create<T, K>(T src)
        {
            try
            {
                var dest = _mapper.Map<T, K>(src);
                return dest;
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
